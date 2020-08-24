//https://denta-app-server.herokuapp.com/api/
//http://localhost:3001/api/

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

export const fetchAppointments = async (key, userId) => {
    const response = await fetch(`https://denta-app-server.herokuapp.com/api/users/${userId}/appointments`);
    const data = await response.json();
    return data;
}

export const fetchDoctors = async () => {
    const response = await fetch(`https://denta-app-server.herokuapp.com/api/doctors`);
    const data = await response.json();
    return data;
}

export const fetchDoctor = async (key, doctorId) => {
    const response = await fetch(`https://denta-app-server.herokuapp.com/api/doctors/${doctorId}`);
    const data = await response.json();
    return data;
}

export const fetchUserInfo = async (userId) => {
    const response = await fetch(`https://denta-app-server.herokuapp.com/api/users/${userId}/user-info`);
    const data = await response.json();
    return data;
}

export const fetchDoctorDayOfWork = async (key, doctorId, date) => {
    const response = await fetch(`https://denta-app-server.herokuapp.com/api/doctors/${doctorId}/days-of-work/${date}`);
    const data = await response.json();
    return data;
}

export const fetchTimeslots = async (key, doctorId, date) => {
    const response = await fetch(`https://denta-app-server.herokuapp.com/api/doctors/${doctorId}/days-of-work/${date}/timeslots`);
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
    try {
        const response = await fetch(`https://denta-app-server.herokuapp.com/api/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        return await response.json();
    }
    catch (error) {
        const response = { error: 'Server is not responding!' }
        return response;
    }
}

export const postTimeslot = async (doctorId, date, data) => {
    try {
        const response = await fetch(`https://denta-app-server.herokuapp.com/api/doctors/${doctorId}/days-of-work/${date}/timeslots`, {
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

export const postAppointment = async (userId, data) => {
    try {
        const response = await fetch(`https://denta-app-server.herokuapp.com/api/users/${userId}/appointments`, {
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

export const fetchNews = async () => {
    const response = await fetch(`https://denta-app-server.herokuapp.com/api/news`);
    const data = await response.json();
    return data;
}