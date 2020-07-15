import React, { useEffect } from 'react'
import { ReactComponent as ReactLogo } from './splash_img.svg'
import { Wrapper } from './Login.css'
import { Form } from 'react-final-form'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

import { setLoginStatus, setTokens } from 'data/actions/actions'

import { noop } from 'lodash'
import {
    TextField,
} from 'mui-rff';
import {
    Paper,
    Grid,
    Button


} from '@material-ui/core';
import { animateLogo } from 'animations/logo'

import API from 'data/fetch'



import { } from 'components'

import { connect } from 'react-redux'

// Force CSSPlugin to not get dropped during build




const formFields = [
    {
        size: 12,
        field: (
            <TextField
                label="User name"
                name="user_name"
                margin="none"
                required={true}

            />
        ),
    },
    {
        size: 12,
        field: (
            <TextField
                label="Password"
                name="password"
                margin="none"
                type="password"
                required={true}

            />
        ),
    },

];


const validate = values => {
    const errors = {};
    if (!values.user_name) {

        errors.user_name = 'Required';

    }
    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};



function Login({ onSubmit = noop, buttons = [], isLoggedIn,
    setLoginStatus, setTokens }) {

    useEffect(() => {
        animateLogo();
        if (isLoggedIn) {
            history.push("/panel");
        }



    })

    let history = useHistory();






    /* 
        const handleSubmitLogin = async (values) => {
    
            console.log(values);
    
    
        } */


    const handleSubmitLogin = async values => {


        try {
            const tokens = await API.fetch.fetchLogin(values);
            console.log(tokens);
            if (tokens.tokens) {
                toast.success(tokens.response)
                setLoginStatus(true);
                localStorage.setItem("token", tokens.tokens.accessToken)
                setTokens(tokens.tokens)
                history.push("/panel");
            } else {
                toast.error('Connection error!');
            }






        } catch (error) {

            toast.error(error)
        }
    }




    const handleRegisterButton = values => {


        history.push("/register");

    }





    return (


        <Wrapper>
            <ReactLogo />

            <Form
                onSubmit={handleSubmitLogin}
                initialValues={{}}
                validate={validate}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Paper elevation={0}>
                            <Grid container alignItems="center" justify="center" spacing={2}>
                                {formFields.map((item, idx) => (
                                    <Grid item xs={item.size} key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}



                                <Grid item xs={4} style={{ marginTop: 16 }}>
                                    <Button
                                        style={{ width: '100%' }}
                                        type="button"
                                        variant="contained"
                                        onClick={handleRegisterButton}

                                        color="primary"
                                    >
                                        Register
                                    </Button>
                                </Grid>
                                <Grid item xs={4} style={{ marginTop: 16 }}>
                                    <Button
                                        style={{ width: '100%' }}
                                        variant="contained"
                                        color="primary"
                                        type="button"
                                        disabled={submitting}
                                        onClick={form.reset}
                                    >
                                        Reset
                                    </Button>
                                </Grid>


                                <Grid item xs={4} style={{ marginTop: 16 }}>

                                    <Button
                                        style={{ width: '100%' }}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                        to="/panel"
                                    >
                                        Log in
                                    </Button>



                                </Grid>
                            </Grid>


                        </Paper>

                    </form>
                )}
            />
        </Wrapper>





    )
}

export default connect(state => ({
    isLoggedIn: state.state.isLoggedIn
}),
    { setLoginStatus, setTokens })(Login)



