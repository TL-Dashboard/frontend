import { axiosWithAuth } from './axiosWithAuth';
import { getStudentData } from './getStudentData'

export const postGrade = (data, updateState, redirect) => {
    updateState('isLoading', true);
    axiosWithAuth()
        .post(`/grades`, data)
        .then(res => {
            console.log('grade posted:', res.data)
            getStudentData(updateState, data.teamlead_id)
            updateState('isLoading', false)
            redirect()
        })
        .catch(err => {
            console.log(err)
            updateState('error', err);
            updateState('isLoading', false);
        })
}