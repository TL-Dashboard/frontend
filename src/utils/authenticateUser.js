import { axiosWithAuth } from './axiosWithAuth';

export const authenticateUser = (values, updateState, redirect) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .post('/auth/login', values)
        .then(res => {
            const { token } = res.data;
            console.log('user logged in', res.data);
            const data = {
                id: res.data.id,
                first_name: res.data.first_name,
            };
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(data.id));
            sessionStorage.setItem('username', (data.first_name));
            updateState('isAuthenticated', true);
            updateState('isLoading', false);
            updateState('error', false);
            redirect();
        })
        .catch(err => {
            // console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}