import axios from 'axios';

axios.defaults.withCredentials = true;
const baseUrl = 'http://localhost:3000/bdo-stuff';

let token = localStorage.getItem('token') || '';
let tokenExpiration = localStorage.getItem('tokenExpiration') || '';

const setToken = (newToken, newTokenExpiration) => {
    token = newToken;
    tokenExpiration = newTokenExpiration;

    localStorage.setItem('token', newToken);
    localStorage.setItem('tokenExpiration', newTokenExpiration);
};

const removeTokens = () => {
    token = '';
    tokenExpiration = '';

    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
};

const checkTokenExpired = async () => {
    axios.defaults.withCredentials = true;
    const tokenExpires = new Date(tokenExpiration);
    const timeNow = new Date();

    if (tokenExpires < timeNow) {
        await refreshToken();
    }
};

const refreshToken = async () => {
    try {

        const response = await axios.post(`${baseUrl}/refresh_token`);
        const data = response.data;
        setToken(data.token, data.tokenExpires);

    } catch (err) {
        console.log(err);
    }
};

const login = async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, formData);
        const data = response.data;
        const userInfo = {
            username: data.username,
            email: data.email,
            alerts: data.alerts,
            id: data.id
        };

        setToken(data.token, data.tokenExpires);

        return userInfo;

    } catch (err) {
        const errorMessage = err.response.data.error;
        return errorMessage;
    }
};

const logout = async () => {
    try {
        axios.defaults.withCredentials = true;

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        await axios.post(`${baseUrl}/logout`, config);
        removeTokens();

    } catch (err) {
        console.log(err);
    }
};

const getAccountInfo = async () => {
    try {
        await checkTokenExpired();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        const response = await axios.get(`${baseUrl}/user`, config);
        const data = response.data;

        return data;
    } catch (err) {
        console.log(err);
    }
};

const createAccount = async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/user`, formData, { withCredentials: true });
        const data = response.data;
        const userInfo = {
            username: data.username,
            email: data.email,
            alerts: data.alerts,
            id: data.id
        };
        setToken(data.token, data.tokenExpires);

        return { userInfo };
    } catch (err) {
        const errorMessage = err.response.data.error;

        if (!errorMessage) {
            return { error: err.response.data.errors[0].msg };
        }
        return { error: errorMessage };
    }
};

const getAlerts = async () => {
    try {
        await checkTokenExpired();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        const response = await axios.get(`${baseUrl}/alert`, config);
        const data = response.data;
        return data;
    } catch (err) {
        console.log(err);
    }
};

const updateAlert = async (formData, id) => {
    try {
        await checkTokenExpired();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        const updatedAlert = await axios.put(`${baseUrl}/alert/${id}`, formData, config);
        const data = updatedAlert.data;

        return data;
    } catch (err) {
        console.log(err);
    }
};

const createAlert = async (formData) => {
    try {
        await checkTokenExpired();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        const response = await axios.post(`${baseUrl}/alert`, formData, config);
        const data = response.data;

        return data;
    } catch (err) {
        console.log(err);
    }
};

const deleteAlert = async (id) => {
    try {
        await checkTokenExpired();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        await axios.delete(`${baseUrl}/alert/${id}`, config);

        return;
    } catch (err) {
        console.log(err);
    }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    login,
    logout,
    refreshToken,
    createAccount,
    getAccountInfo,
    getAlerts,
    updateAlert,
    createAlert,
    deleteAlert
};