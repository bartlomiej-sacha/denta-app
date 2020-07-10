import React, { useEffect, Children } from 'react'
import {
    Button as ButtonMui,
} from '@material-ui/core';
import { Link } from 'react-router-dom';


function Button({ submitting, style,
    variant,
    color,
    type,
    disabled, children, ...props }) {

    const { to } = props;


    useEffect(() => {
        /*   console.log(children); */

    })


    /* const content = () => {

        return (

            <ButtonMui
                style={style}
                variant={variant}
                color={color}
                type={"submit"}
                disabled={disabled}
            >

            </ButtonMui>

        )



    } */



    return (


        < Link {...props}>

            <ButtonMui
                style={style}
                variant={variant}
                color={color}
                type={"submit"}
                disabled={disabled}
            >
                {children}
            </ButtonMui>
        </Link >
    )
}

export default Button;