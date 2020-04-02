import { axiosWithAuth } from './axiosWithAuth';

export const getCohorts = (updateState, id) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .get(`/cohorts/${id}`)
        .then(res => {
            console.log('getting cohort data:', res.data)
            updateState('students', res.data)
            updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}