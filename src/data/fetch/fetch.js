export const fetchDoctors = async () => {

    const response = await fetch(`http://localhost:3001/api/doctors`);

    const data = await response.json();

    return data;
}