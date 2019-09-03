export const getLists = (lists) => {
    return{
        type: 'GET_LISTS',
        playload: lists
    }
}