import React, { useEffect } from 'react'
import { Form } from 'react-final-form'
import gsap from 'gsap'
import Map from './components/Map'
import mail from '../../assets/mail.svg'
import pin from '../../assets/pin.svg'
import timetable from '../../assets/timetable.svg'
import phone from '../../assets/phone.svg'
import { TextField } from 'mui-rff';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify'
import Axios from 'axios'
import Api from 'data/fetch'


function Contact({ userInfo }) {
    useEffect(() => {
        gsap.set('.contact', { display: 'none' })
        gsap.to('.contact', { display: 'flex', delay: .6 })
        gsap.from('.contact', {
            duration: 1, opacity: 0, delay: .5
        })
    })

    const handleSend = async values => {
        const userInfo = await Api.fetch.fetchUserInfo(localStorage.userId);
        try {
            const response = await Axios.post('https://denta-app-server.herokuapp.com/api/mail', {
                name: `${userInfo.user[0].first_name} ${userInfo.user[0].last_name}`,
                email: userInfo.user[0].email,
                message: values.message
            })
            toast.success(response.data.response)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="contact">
            <div className="contact__wrapper">
                <div className="contact__info">
                    <h2>Contact:</h2>
                    <ul className="contact__details-list">
                        <li className="list-item">
                            <img src={phone} alt="" className="contact__icon" height="25px" />
                            <span className="contact-text">+48 12 345 67 89</span>
                        </li>
                        <li className="list-item">
                            <img src={mail} alt="" className="contact__icon" height="25px" />
                            <span className="contact-text">denta-app@mail.com</span>
                        </li>

                        <li className="list-item">
                            <img src={timetable} alt="" className="contact__icon" height="25px" />
                            <span className="contact-text">Monday-Friday: 8:00 - 18:00</span>
                        </li>

                        <li className="list-item">
                            <img src={pin} alt="" className="contact__icon" height="25px" />
                            <span className="contact-text">Wawel 5, 31-001 Kraków</span>
                        </li>

                    </ul>
                </div>
                <div className="contact__form">
                    <div className="form__heading">
                        <h2 className="form__title">Write to us!</h2>
                        <p className="form__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro voluptatem odit.
                    </p>
                    </div>
                    <Form
                        onSubmit={handleSend}
                        initialValues={{}}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form__items">
                                    <div className="form__input">
                                        <TextField
                                            color="primary"
                                            label="Message"
                                            name="message"
                                            rowsMax={3}
                                            multiline={true}
                                        />
                                    </div>
                                    <div className="form__button">
                                        <Button
                                            style={{ width: '100%' }}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Send
                                         </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    />
                </div>
                <div className="map-container">
                    <div className="map-container__button">
                        <Button
                            style={{ width: '100%' }}
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                const map = document.querySelector('.map-container__map');
                                map.classList.toggle("map-container--active");

                            }}
                        >
                            Show map
                        </Button>
                    </div>
                    <div className="map-container__map">
                        <Map />
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Contact;