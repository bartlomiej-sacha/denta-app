import React, { useEffect, useState } from 'react';
import { Route, } from 'react-router-dom';
import API from 'data/fetch'





const isAuthenticated = async () => {

    try {
        const response = await API.fetch.fetchProfile(localStorage.token);
        if (response.response) {
            return true;
        }
    } catch (error) {
        return false;
    }

}

const PrivateRoute = ({ component: Component, reduxAuth, ...rest }) => {
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        console.log('siema kujrwa');
        isAuthenticated().then((bool) => setAuthenticated(bool));
    }, []);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (authenticated === null) return '...loading';
                return authenticated ? <Component {...props} /> : <div>{authenticated}Please login in first</div>
            }}
        />



    );
};



export default PrivateRoute