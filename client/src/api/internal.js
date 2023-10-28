import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REAT_APP_INTERAL_API_PATH,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (data) => {
    try {
        const respone = await api.post('/auth/login', data);
        return respone;
    } catch (error) {
        return error;
    }
};
export const register = async (data) => {
    try {
        const respone = await api.post('/auth/register', data);
        return respone;
    } catch (error) {
        return error;
    }
};
export const logout = async (data) => {
    try {
        const respone = await api.post('/auth/logout');
        return respone;
    } catch (error) {
        return error;
    }
};

export const getAllProducts = async() => {
    try {
        const respone = await axios.get('https://fakestoreapi.com/products');
        return respone;
    } catch (error) {
        return error;
    }
}