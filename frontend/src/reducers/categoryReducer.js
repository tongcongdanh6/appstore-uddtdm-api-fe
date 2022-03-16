const initialState = {
    list: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {...state, list: action.payload}
        default:
            return state;
    }
}

export default categoryReducer;