import React, { } from 'react'
import logo from './logo.svg';
import { SvgIcon } from '@material-ui/core';
import {
    Grid,
} from '@material-ui/core';
import {


    Route,

} from 'react-router-dom'
import { Button } from 'components'

import { Appointment, Visits, AboutUs, Contact } from 'pages'


function Panel({ match }) {

    const { url } = match;




    return (
        <div className="grid">

            <div className="logo">
                <img className="logo__svg" src={logo} alt="logo" width="100%" />
            </div>

            <div className="navbar">
                <Grid container wrap='nowrap'

                    direction="row"
                    justify="flex-end"
                    alignItems="center">





                    <Button url={match} variant="outlined" color="primary" to={`${url}`}>
                        Home
                        </Button>


                    <Button url={match} variant="outlined" color="primary" to={`${url}/make-appointment`}>Make an appointment</Button>


                    <Button match variant="outlined" color="primary" to={`${url}/scheduled-visits`} >
                        Scheduled visits
                    </Button>

                    <Button match variant="outlined" color="primary" to={`${url}/about-us`}>
                        About us
                    </Button>

                    <Button match variant="outlined" color="primary" to={`${url}/contact`}>
                        Contact
                    </Button>








                </Grid>

            </div >
            <div className="menu"><SvgIcon color="primary">

                <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
            </SvgIcon>

            </div >


            <div className="content">
                <Route exact path="/panel/make-appointment" component={Appointment} />
                <Route exact path="/panel/scheduled-visits" component={Visits} />
                <Route exact path="/panel/about-us" component={AboutUs} />
                <Route exact path="/panel/contact" component={Contact} />
            </div>


        </div >
    )
}

export default Panel;