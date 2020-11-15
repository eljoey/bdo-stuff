import axios from 'axios';

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
        const response = await axios.post(`${baseUrl}/login`, formData, { withCredentials: true });
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
    await axios.post(`${baseUrl}/logout`, {}, { withCredentials: true });
    removeTokens();
};

const createAccount = async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/user`, formData);
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
        return { error: errorMessage };
    }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    login,
    createAccount,
    logout
};