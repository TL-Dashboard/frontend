import { axiosWithAuth } from './axiosWithAuth';

export const getAssignments = (updateState, id) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .get(`/assignments/query/filter?cohort_id=${id}`)
        .then(res => {
            console.log('getting assignments:', res.data)
            updateState('assignments', res.data)
            updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}