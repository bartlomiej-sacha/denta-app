import React, { useEffect } from 'react'
function LoggedOut() {

    useEffect(() => {
        console.log('chuj');
    })


    return (
        <div>Please Log in first!</div>
    )
}

export default LoggedOut;