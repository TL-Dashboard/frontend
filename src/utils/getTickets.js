import { axiosWithAuth } from './axiosWithAuth';

export const getTickets = (updateState, id) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .get(`/tickets/query/filter?teamlead_id=${id}`)
        .then(res => {
            console.log('getting tickets:', res.data)
            updateState('tickets', res.data)
            updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}