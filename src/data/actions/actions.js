export const setLoginStatus = (isLogged) => {

    return ({
        type: "SET_LOGGED",
        payload: isLogged
    })


}