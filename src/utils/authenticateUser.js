import { axiosWithAuth } from './axiosWithAuth';

export const authenticateUser = (values, redirect) => {
    console.log('authenticate user action', values)
    axiosWithAuth()
        .post('/auth/login', values)
        .then(res => {
            const { token } = res.data;
            console.log('user logged in', res.data);
            
            console.log('user', res.data.id);
            const data = {
                id: res.data.id,
                first_name: res.data.first_name,
            };
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(data.id));
            sessionStorage.setItem('username', (data.first_name));
            redirect();
        })
        .catch(err => {
            console.log(err)
        })
}