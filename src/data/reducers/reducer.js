const initialState = {
    isLoggedIn: false,
    isLoading: false,
    userId: undefined,
    tokens: {

    }
}

function state(state = initialState, action) {
    switch (action.type) {
        case "SET_LOGGED":
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload
            }
        case "SET_TOKENS":
            return {
                ...state,
                tokens: action.payload
            }
        case "SET_USER_ID":
            return {
                ...state,
                userId: action.payload
            }
        default:
            return state;
    }
}

export default state;