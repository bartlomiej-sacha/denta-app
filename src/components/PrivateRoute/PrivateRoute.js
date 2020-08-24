import React, { useEffect, useState } from 'react';
import { Route, } from 'react-router-dom';
import API from 'data/fetch'
import { LoadingIndicator } from 'components'
import { Button } from 'components'

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
        isAuthenticated().then((bool) => setAuthenticated(bool));
    }, []);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (authenticated === null) return <LoadingIndicator />;
                return authenticated ?
                    <Component {...props} /> :
                    <div>
                        <Button variant="contained" color="primary" to={"/"}>
                            Please log in first!
                    </Button>
                    </div>
            }}
        />
    );
};

export default PrivateRoute