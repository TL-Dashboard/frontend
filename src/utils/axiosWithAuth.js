import axios from 'axios';

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');
    return axios.create({
        baseURL: 'https://tldashboard.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}