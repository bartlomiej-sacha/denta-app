import React, { } from 'react'
import { Button as MuiButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLoginStatus } from 'data/actions/actions'
import { toast } from 'react-toastify'

function Button({ submitting, style,
    variant,
    color,
    value,
    disabled,
    onClick,
    match,
    setLoginStatus,
    children, ...props }) {

    const { to } = props;
    const { logout } = props;

    const handleClick = () => {
        if (logout === true) {
            setLoginStatus(false)
            localStorage.clear();
            toast.success("Logged out!");
        }
    }

    return to ? (
        < MuiButton
            style={style}
            variant={variant}
            color={color}
            component={NavLink}
            onClick={handleClick}
            match={match}
            value={value}
            activeClassName="activeLink"
            to={to}
        >
            {children}
        </MuiButton >
    ) : (
            < MuiButton
                style={style}
                variant={variant}
                color={color}
                value={value}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </MuiButton >
        )
}
export default connect(state => ({
    isLoggedIn: state.state.isLoggedIn
}),
    { setLoginStatus })(Button);