import React, { useEffect } from 'react'
import { ReactComponent as ReactLogo } from '../../assets/splash_img.svg'
import { Wrapper } from './Login.css'
import { Form } from 'react-final-form'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { setLoginStatus, setTokens, setUserId } from 'data/actions/actions'
import { noop } from 'lodash'
import { TextField } from 'mui-rff';
import { Paper, Grid, Button } from '@material-ui/core';
import { animateLogo } from 'animations/animateLogo'
import API from 'data/fetch'
import { connect } from 'react-redux'

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
    setLoginStatus, setTokens, setUserId }) {
    useEffect(() => {
        animateLogo();
        if (isLoggedIn) {
            history.push("/panel/home");
        }
    })

    let history = useHistory();

    const handleSubmitLogin = async values => {

        const tokens = await API.fetch.fetchLogin(values);
        if (tokens.error) {
            toast.error(tokens.error);
        }
        else if (tokens.tokens) {
            toast.success(tokens.response)
            setLoginStatus(true);
            setUserId(tokens.id)
            localStorage.setItem("token", tokens.tokens.accessToken)
            localStorage.setItem("userId", tokens.id)
            localStorage.setItem("profile", tokens.profile)
            setTokens(tokens.tokens)
        } else {
            toast.error('Server is not responding!')
        }
    }


    const handleRegisterButton = values => {
        history.push("/register");
    }

    return (
        <Wrapper>
            <div className="svg-wrapper">
                <ReactLogo />
            </div>
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
    { setLoginStatus, setTokens, setUserId })(Login)



