import { axiosWithAuth } from './axiosWithAuth';
import { getStudentData } from './getStudentData'

export const postRetro = (data, updateState, redirect) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .post(`/retros`, data)
        .then(res => {
            console.log('retro posted:', res.data)
            getStudentData(updateState, data.teamlead_id)
            updateState('retro', {})
            updateState('isLoading', false)
            redirect()
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}