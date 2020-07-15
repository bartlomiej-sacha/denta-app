

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    tokens: {

    }
}

//zawsze nowy obiekt state
function state(state = initialState, action) {


    // loading ustawia sie po kluczu akcji [action.type] dlatego pozniej usuwamy delete newLoadingState.BUDGET_GET_REQUEST czyli usuwamy ten klucz
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


        default:
            return state;

    }

}



export default state;