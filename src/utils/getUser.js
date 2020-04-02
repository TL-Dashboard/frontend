export const getUser = () => {
    const user_id = JSON.parse(sessionStorage.getItem('user_id'));
    console.log('getUser', user_id)
    return !!user_id ? user_id : { id: '', username: '' };
}