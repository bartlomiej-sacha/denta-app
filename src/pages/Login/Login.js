import React, { useEffect } from 'react'
import { ReactComponent as ReactLogo } from './splash_img.svg'
import { Wrapper } from './Login.css'
import { Form } from 'react-final-form'
import { toast } from 'react-toastify';

import { setLoginStatus } from 'data/actions/actions'

import { groupBy, noop } from 'lodash'
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

import { Link } from 'react-router-dom';

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
    if (!values.userName) {
        toast.success('fill');
        errors.firstName = 'Required';

    }
    if (!values.password) {
        errors.lastName = 'Required';
    }

    return errors;
};



function Login({ onSubmit = noop, buttons = [], isLoggedIn,
    setLoginStatus }) {

    useEffect(() => {
        animateLogo();


    })




    const required = value => (value ? undefined : 'Required!')





    /* 
        const handleSubmitLogin = async (values) => {
    
            console.log(values);
    
    
        } */
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


    const handleSubmitLogin = async values => {
        console.log(values);

        try {
            const tokens = await API.fetch.fetchLogin(values);

            if (tokens.accessToken) {
                toast.success(tokens.response)
                setLoginStatus(true);
            } else {
                toast.error(tokens.response);
            }






        } catch (error) {

            toast.error(error)
        }
    }



    return (


        <Wrapper>
            <ReactLogo />

            <Form
                onSubmit={handleSubmitLogin}
                initialValues={{}}
                /*  validate={validate} */
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper elevation={0}>
                            <Grid container alignItems="center" justify="center" spacing={2}>
                                {formFields.map((item, idx) => (
                                    <Grid item xs={item.size} key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}

                                {/*   {buttons.map(button => (

                                    <Grid item style={{ marginTop: 16 }}>


                                        <Button style={{ width: '100px' }}
                                            type="submit"
                                            variant="contained"
                                            disabled={submitting}
                                            color="primary"
                                            to={button.to}
                                        >

                                            {button.content}
                                        </Button>



                                    </Grid>

                                ))} */}



                                <Grid item style={{ marginTop: 16 }}>
                                    <Button
                                        style={{ width: '100px' }}
                                        type="button"
                                        variant="contained"
                                        onClick={form.reset}
                                        disabled={submitting}
                                        color="primary"
                                    >
                                        Register
                                    </Button>
                                </Grid>
                                <Grid item style={{ marginTop: 16 }}>
                                    <Button
                                        style={{ width: '100px' }}
                                        variant="contained"
                                        color="primary"
                                        type="button"
                                        disabled={submitting}
                                    >
                                        Reset
                                    </Button>
                                </Grid>


                                <Grid item style={{ marginTop: 16 }}>
                                    {/*  <Link to="/panel"> */}
                                    <Button
                                        style={{ width: '100px' }}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Log in
                                    </Button>
                                    {/*  </Link> */}
                                </Grid>

                            </Grid>
                        </Paper>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </Wrapper>





    )
}

export default connect(state => {
    return { isLoggedIn: state.isLoggedIn }
}, { setLoginStatus })(Login)



