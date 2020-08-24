import React from 'react'
import logo from '../../assets/logo.svg';
import { Route } from 'react-router-dom'
import { Button } from 'components'
import Appointment from "../Appointment/Appointment"
import UserAppointments from "../UserAppointments/UserAppointments"
import AboutUs from "../AboutUs/AboutUs"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Burger from './components/Burger/Burger'
import { gsap } from 'gsap'
import { Transition } from 'react-transition-group'
import { SuspenseErrorBoundary } from 'components'

const routes = [
    { path: "/panel/home", name: "Home", Component: Home },
    { path: "/panel/make-appointment", name: "Appointment", Component: Appointment },
    { path: "/panel/scheduled-visits", name: "Visits", Component: UserAppointments },
];

function Panel({ match }) {



    const { url } = match;

    const onEnter = node => {
        if (node) {
            gsap.set(node, { display: 'none' })
            gsap.to(node, { display: 'flex', delay: .6 })
            gsap.from(node,
                { duration: 1, x: -3000, ease: "Power4.easeOut", delay: .6 })
        }
    }

    const onExit = node => {
        gsap.to(node, {
            duration: .5, opacity: 0, ease: "Power4.easeOut",
        })
    }

    return (
        <div className="main">
            <div className="header">
                <div className="logo">
                    <a href="http://www.google.com/">
                        <img className="logo__svg" src={logo} alt="logo" width="100%" />
                    </a>
                </div>
                <div className="navbar">
                    <div className="navbar__button">
                        <Button variant="outlined" color="primary" to={`${url}/home`}>
                            Home
                        </Button>
                    </div>
                    <div className="navbar__button">
                        <Button variant="outlined" color="primary" to={`${url}/make-appointment`}>Make an appointment</Button>
                    </div>
                    <div className="navbar__button">
                        <Button variant="outlined" color="primary" to={`${url}/scheduled-visits`} >
                            Scheduled appointments
                    </Button>
                    </div>
                    <div className="navbar__button">
                        <Button variant="outlined" color="primary" to={`${url}/about-us`}>
                            About us
                    </Button>
                    </div>
                    <div className="navbar__button">
                        <Button variant="outlined" color="primary" to={`${url}/contact`}>
                            Contact
                    </Button>
                    </div>
                </div >
                <Burger url={url} />
            </div>
            <div className="content">
                <SuspenseErrorBoundary>
                    {routes.map(({ path, name, Component }) => (
                        <Route key={name} path={path} exact>
                            {({ match }) => (
                                <Transition
                                    in={match != null}
                                    timeout={300}
                                    unmountOnExit
                                    onExit={onExit}
                                    onEnter={onEnter}
                                >
                                    <Component />
                                </Transition>
                            )}
                        </Route>
                    ))}
                    <Route path={"/panel/contact"} name={"Contact"}>
                        <Contact />
                    </Route>
                    <Route path={"/panel/about-us"} name={"AboutUs"}>
                        <AboutUs />
                    </Route>
                </SuspenseErrorBoundary>
            </div>
        </div>
    )
}

export default Panel;