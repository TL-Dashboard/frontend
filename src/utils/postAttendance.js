import { axiosWithAuth } from './axiosWithAuth';

export const postAttendance = (data, updateState) => {
    // updateState('isLoading', true);
    axiosWithAuth()
        .post(`/attendance`, data)
        .then(res => {
            console.log('attendance posted:', res.data)
            // updateState('isLoading', false)
        })
        .then(
            updateState('attendanceTaken', true)
        )
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}