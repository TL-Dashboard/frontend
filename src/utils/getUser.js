export const getUser = (updateState) => {
    const user = {
        id: JSON.parse(sessionStorage.getItem('user_id')),
        email: (sessionStorage.getItem('email')),
        first_name: (sessionStorage.getItem('first_name')),
        last_name: (sessionStorage.getItem('last_name')),
        img_url: (sessionStorage.getItem('img_url')),
        type: (sessionStorage.getItem('type')),
        fifth_day: JSON.parse(sessionStorage.getItem('fifth_day')),
        cohort_id: JSON.parse(sessionStorage.getItem('cohort_id')),
        cohort_name: (sessionStorage.getItem('cohort_name'))
    }
    updateState('user', user)
    return !!user ? user : { id: '', first_name: 'Error' };
}