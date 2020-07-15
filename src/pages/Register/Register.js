import React from 'react'
import { Form } from 'react-final-form'
import {
    TextField,
} from 'mui-rff';
import {
    Paper,
    Grid,
    Button


} from '@material-ui/core';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import API from 'data/fetch'
import { Wrapper, HeaderBar } from '../Login/Login.css'

const validate = values => {
    const errors = {};
    if (!values.first_name) {

        errors.first_name = 'Required';

    }
    if (!values.last_name) {
        errors.last_name = 'Required';
    }
    if (!values.birth_date) {
        errors.birth_date = 'Required';
    }
    if (!values.city) {
        errors.city = 'Required';
    }
    if (!values.street) {
        errors.street = 'Required';
    }
    if (!values.house_number) {
        errors.house_number = 'Required';
    }
    if (!values.postal_code) {
        errors.postal_code = 'Required';
    }
    if (!values.phone_number) {
        errors.phone_number = 'Required';
    }
    if (!values.user_name) {
        errors.user_name = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    /* if (!values.confirmPassword) {


        errors.confirmPassword = 'Required'


    } */
    /* if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
    } */

    return errors;
};




const formFields = [
    {
        size: 6,
        field: (
            <TextField
                label="First name"
                name="first_name"
                margin="none"
                required={true}

            />
        ),
    },
    {
        size: 6,
        field: (
            <TextField
                label="Last name"
                name="last_name"
                margin="none"
                required={true}

            />
        ),
    }, {
        size: 6,
        field: (
            <TextField InputLabelProps={{ shrink: true }}
                label="Date of birth"
                name="birth_date"
                margin="none"
                required={true}
                type="date"

            />
        ),
    }, {
        size: 6,
        field: (
            <TextField
                label="City"
                name="city"
                margin="none"
                required={true}

            />
        ),
    }, {
        size: 6,
        field: (
            <TextField
                label="Street"
                name="street"
                margin="none"
                required={true}

            />
        ),
    }, {
        size: 6,
        field: (
            <TextField
                label="House number"
                name="house_number"
                margin="none"
                required={true}

            />
        ),
    }, {
        size: 6,
        field: (
            <TextField
                label="Postal code"
                name="postal_code"
                margin="none"
                required={true}

            />
        ),
    },
    {
        size: 6,
        field: (
            <TextField
                label="Phone number"
                name="phone_number"
                margin="none"
                required={true}

            />
        ),
    }, {
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
                required={true}
                type="password"

            />
        ),
    }, /* {
        size: 6,
        field: (
            <TextField
                label="Confirm password"
                name="confirmPassword"
                margin="none"
                required={true}
                type="password"

            />
        ),
    } */

];




function Register() {

    let history = useHistory();

    const handleSubmitRegister = async values => {


        try {


            const response = await API.fetch.fetchRegister(values);



            if (response.error) {
                toast.error(response.error);
            }

            if (response.response) {
                toast.success(response.response);
                history.goBack();
            }





        } catch (error) {

            toast.error(error)
        }
    }






    return (

        <Wrapper>
            <HeaderBar>Registration</HeaderBar>
            <Form
                onSubmit={handleSubmitRegister}
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
                                        variant="contained"
                                        color="primary"
                                        type="button"
                                        disabled={submitting}
                                        onClick={() => {
                                            history.goBack();
                                        }}
                                    >
                                        Go back
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
                                        Register
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

export default Register;