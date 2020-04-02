import { axiosWithAuth } from './axiosWithAuth';

export const getStudentData = (updateState, id) => {
    updateState('isLoading', true);
    console.log('getStudentData')
    axiosWithAuth()
        .get(`/teamleads/${id}/studentdata`)
        .then(res => {
            // console.log(res.data)
            updateState('data', res.data)
            updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}