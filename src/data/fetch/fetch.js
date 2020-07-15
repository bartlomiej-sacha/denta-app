export const fetchProfile = async (token) => {


    try {

        const response = await fetch("https://denta-app-server.herokuapp.com/api/users/profile", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json();

        return data;

    } catch (error) {
        return error
    }

}





export const fetchDoctors = async () => {

    const response = await fetch(`https://denta-app-server.herokuapp.com/api/doctors`);

    const data = await response.json();

    return data;
}



export const fetchLogin = async (data) => {

    try {
        const response = await fetch(`https://denta-app-server.herokuapp.com/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });



        return await response.json();
    } catch (error) {
        return error
    }

}


export const fetchRegister = async (data) => {



    const response = await fetch(`https://denta-app-server.herokuapp.com/api/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    });



    return await response.json();
}