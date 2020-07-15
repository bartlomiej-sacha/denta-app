import React, { } from 'react'
import {
    Button as MuiButton
} from '@material-ui/core';
/* import { Link } from 'react-router-dom'; */
import { useHistory, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
     text-decoration: none;
     
     &:focus, &:hover, &:visited, &:link, &:active {
         text-decoration: none;
     }
    `


function Button({ submitting, style,
    variant,
    color,
    value,
    children, ...props }) {

    const history = useHistory();

    const { to } = props;
    console.log(to);
    /* 
        const { to } = props; */

    /*  const StyledLink = styled(NavLink)`
     text-decoration: none;
     
     &:focus, &:hover, &:visited, &:link, &:active {
         text-decoration: none;
     }
 
 
 
 
 `; */



    const StyledLinkMui = styled(Button);



    const handleClick = () => {
        history.push(to)
    }

    return <StyledLink style={{ textDecoration: 'none' }} to={to} {...props} ></StyledLink>



}
export default Button;