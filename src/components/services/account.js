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

    } catch (error) {
        const errorMessage = error.response.data.error;
        return errorMessage;
    }
};

export default {
    login,
};