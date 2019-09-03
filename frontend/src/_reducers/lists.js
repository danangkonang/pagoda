const initialState = {
    data: [],
    isLoading: false
}

const lists = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LISTS':
            return {
                ...state,
                data: action.playload
            }
        
        default:
            return state
    }
}

export default lists