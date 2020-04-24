import axios from 'axios';

export const axiosWithAuth = () => {
    // returns an "instance" of axios, with preconfigured configs

    const token = localStorage.getItem('token'); // JSON.parse cause error here
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'http://localhost:5000'
    })
}