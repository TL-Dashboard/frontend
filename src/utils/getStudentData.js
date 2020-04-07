import { axiosWithAuth } from './axiosWithAuth';

export const getStudentData = (updateState, id) => {
    // updateState('isLoading', true);
    axiosWithAuth()
        .get(`/teamleads/${id}/studentdata`)
        .then(res => {
            console.log('getting student data:', res.data)
            updateState('students', res.data)
            // updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}