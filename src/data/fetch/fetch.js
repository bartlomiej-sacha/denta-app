export const fetchDoctors = async () => {

    const response = await fetch(`http://localhost:3001/api/doctors`);

    const data = await response.json();

    return data;
}



export const fetchLogin = async (data) => {

    console.log("eloo");
    console.log(JSON.stringify(data));
    const response = await fetch(`http://localhost:3001/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    });



    return await response.json();
}