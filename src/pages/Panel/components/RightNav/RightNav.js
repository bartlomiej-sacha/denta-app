import React from 'react'
import { Button } from 'components'
import styled from 'styled-components'

const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: column nowrap;
position: fixed;
top: 0;
right: 0;
height: 100vh;

padding: 80px 50px 50px 50px;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.3s ease-in-out;
z-index: 10;
background-color: #ceeeec;
margin-top: 0;

a {
    margin-bottom: 30px;
    padding: 20px;
}`

function RightNav({ url, open, handleClose }) {
    return (
        <Ul open={open} onClick={() => {
            handleClose();
        }}>
            <Button variant="contained" color="primary" to={`${url}/home`}>
                Home
            </Button>
            <Button variant="contained" color="primary" to={`${url}/make-appointment`}>
                Make an appointment
            </Button>
            <Button variant="contained" color="primary" to={`${url}/scheduled-visits`}>
                Scheduled appointments
            </Button>
            <Button variant="contained" color="primary" to={`${url}/about-us`}>
                About us
            </Button>
            <Button variant="contained" color="primary" to={`${url}/contact`}>
                Contact
            </Button>
            <Button logout={true} variant="contained" color="primary" to={"/"}>
                Log out
            </Button>
        </Ul>
    )
}

export default RightNav;    