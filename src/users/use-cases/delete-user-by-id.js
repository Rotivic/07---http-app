/**
 * @param {Like<User>} user
 */
export const deleteUser = async( id ) => {
   
    const url  = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const deleteResult = await res.json();
   
    return true;
}