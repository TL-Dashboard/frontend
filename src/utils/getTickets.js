import { axiosWithAuth } from './axiosWithAuth';
import { getUser } from './getUser';
import { updateState } from '../Context'

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

export const putTicket = (ticket, updateState) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .put(`/tickets/${ticket.id}`, ticket)
        .then(res => {
            console.log('ticket updated:', res.data)
            getTickets(updateState, getUser().id)
            updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}

export const delTicket = (ticket, updateState) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .delete(`/tickets/${ticket.id}`)
        .then(res => {
            console.log('ticket updated:', res.data)
            getTickets(updateState, getUser().id)
            updateState('isLoading', false)
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}