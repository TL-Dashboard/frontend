import { axiosWithAuth } from './axiosWithAuth';

export const authenticateUser = (values, updateState, redirect) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .post('/auth/login', values)
        .then(res => {
            const { token } = res.data;
            console.log('user logged in', res.data);
            // const data = {
            //     id: res.data.id,
            //     first_name: res.data.first_name,
            // };
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user_id', JSON.stringify(res.data.id));
            sessionStorage.setItem('email', (res.data.email));
            sessionStorage.setItem('first_name', (res.data.first_name));
            sessionStorage.setItem('last_name', (res.data.first_name));
            sessionStorage.setItem('img_url', (res.data.img_url))
            sessionStorage.setItem('type', (res.data.type))
            sessionStorage.setItem('fifth_day', (res.data.fifth_day))
            sessionStorage.setItem('cohort_id', (res.data.cohort_id))
            updateState('user', res.data)
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