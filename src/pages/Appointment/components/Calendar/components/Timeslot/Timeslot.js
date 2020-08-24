import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';

function Timeslots({ children, ...props }) {
    return (
        <ToggleButton value={children} aria-label="left aligned">
            {children}
        </ToggleButton>
    )
}

export default Timeslots;