import { axiosWithAuth } from './axiosWithAuth';

export const getSLs = (updateState, id) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .get(`/sectionleads/query/filter?cohort_id=${id}`)
        .then(res => {
            console.log('getting sectionlead data:', res.data)
            updateState('sectionleads', res.data)
            updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}