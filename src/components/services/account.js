import axios from 'axios';

axios.defaults.withCredentials = true;
const baseUrl = 'http://localhost:3000/bdo-stuff';

let token = localStorage.getItem('token') || '';
let tokenExipration = localStorage.getItem('tokenExpiration') || '';

const setToken = (newToken, newTokenExpiration) => {
    token = newToken;
    tokenExipration = newTokenExpiration;

    localStorage.setItem('token', newToken);
    localStorage.setItem('tokenExpiration', newTokenExpiration);
};

const removeTokens = () => {
    token = '';
    tokenExipration = '';

    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
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
    await axios.post(`${baseUrl}/logout`);
    removeTokens();
};

const refreshToken = async () => {
    const response = await axios.post(`${baseUrl}/refresh_token`);
    const data = response.data;
    setToken(data.token, data.tokenExpires);

    return response.data;
};

const getAccountInfo = async () => {
    try {
        checkTokenExpired();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        const response = await axios.get(`${baseUrl}/user`, config);
        const data = response.data;

        return data;
    } catch (error) {
        console.log(error);
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
            return err;
        }
        return { error: errorMessage };
    }
};

const getAlerts = async () => {
    try {
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

const checkTokenExpired = async () => {
    const tokenExpires = new Date(tokenExipration);
    const timeNow = new Date();

    if (tokenExpires < timeNow) {
        await refreshToken();
    }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    login,
    logout,
    refreshToken,
    createAccount,
    getAccountInfo,
    getAlerts
};