export const setLoginStatus = (isLogged) => {
    return ({
        type: "SET_LOGGED",
        payload: isLogged
    })
}

export const setLoadingStatus = (isLoading) => {
    return ({
        type: "SET_LOADING",
        payload: isLoading
    })
}

export const setTokens = (tokens) => {
    return ({
        type: "SET_TOKENS",
        payload: tokens
    })
}

export const setUserId = (userId) => {
    return ({
        type: "SET_USER_ID",
        payload: userId
    })
}