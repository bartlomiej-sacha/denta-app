import React, { } from 'react'
import {
    Button as MuiButton
} from '@material-ui/core';
/* import { Link } from 'react-router-dom'; */
import { useHistory, NavLink } from 'react-router-dom'
import styled from 'styled-components'




function Button({ submitting, style,
    variant,
    color,
    value,

    children, ...props }) {

    const history = useHistory();
    const { to } = props;

    /* 
        const { to } = props; */

    /*  const StyledLink = styled(NavLink)`
     text-decoration: none;
     
     &:focus, &:hover, &:visited, &:link, &:active {
         text-decoration: none;
     }
 
 
 
 
 `; */

    /* const StyledLink = styled(NavLink)`
     text-decoration: none;
     
     &:focus, &:hover, &:visited, &:link, &:active {
         text-decoration: none;
     }
    `

    const StyledLinkMui = styled(Button); */

    const LinkWithProps = () => (
        <NavLink activeClassName="activeLink" {...props} />


    )

    const handleClick = () => {
        history.push(to)
    }

    return (

        < MuiButton
            style={style}
            variant={variant}
            color={color}
            component={NavLink}
            onClick={handleClick}
            value={value}
            activeClassName="activeLink"
            exact
            to={to}
        >


            {children}
        </MuiButton >

        /* <ButtonWithLink /> */



    )

}
export default Button;