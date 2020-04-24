import axios from 'axios';

export const axiosWithAuth = () => {
    // returns an "instance" of axios, with preconfigured configs


    //****GITHUB INSTRUCTIONS******/ Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API

    const token = localStorage.getItem('token'); // JSON.parse cause error here
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'http://localhost:5000'
    })
}