import React, { useEffect } from 'react'
import { ReactComponent as ReactLogo } from './splash_img.svg'
import { Wrapper } from './Login.css'
import { Form } from 'react-final-form'

import { groupBy, noop } from 'lodash'
import {
    TextField,
} from 'mui-rff';
import {
    Paper,
    Grid,
    Button,
} from '@material-ui/core';
import { animateLogo } from 'animations/logo'



// Force CSSPlugin to not get dropped during build





const formFields = [
    {
        size: 12,
        field: (
            <TextField
                label="User name"
                name="userName"
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
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    return errors;
};



function Login() {

    useEffect(() => {
        animateLogo();

    })




    const required = value => (value ? undefined : 'Required!')

    return (


        <Wrapper>
            <ReactLogo />

            <Form
                onSubmit={noop}
                initialValues={{}}
                validate={validate}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper elevation={0}>
                            <Grid container alignItems="center" justify="center" spacing={2}>
                                {formFields.map((item, idx) => (
                                    <Grid item xs={item.size} key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}

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
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Reset
                                    </Button>
                                </Grid>
                                <Grid item style={{ marginTop: 16 }}>
                                    <Button
                                        style={{ width: '100px' }}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Log in
                                    </Button>
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

export default Login;