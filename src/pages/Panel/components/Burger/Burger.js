import React, { useState } from 'react'
import styled from 'styled-components';
import RightNav from '../RightNav/RightNav'

const StyledBurger = styled.div`
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    padding-right: 30px;
    padding-left: 15px;
    flex-grow: 1;
    align-items: flex-end;

    @media screen and (min-width: 1205px) {
        flex-grow: 0;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? 'white' : '#67C9C3'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

function Burger({ url }) {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav url={url} open={open} handleClose={handleClose} />
        </>
    )
}

export default Burger;