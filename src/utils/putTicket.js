import { axiosWithAuth } from './axiosWithAuth';
import { getTickets } from './getTickets';
import { getUser } from './getUser';

export const putTicket = (ticket, updateState, redirect) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .put(`/tickets/${ticket.id}`, ticket)
        .then(res => {
            console.log('ticket updated:', res.data)
            getTickets(updateState, getUser().id)
            updateState('isLoading', false)
            redirect()
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}