import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollableList } from 'components'
import { useQuery } from 'react-query';
import appointmentSvg from '../../assets/appointment.svg';
import doneAppointmentSvg from '../../assets/done-appointment.svg';
import API from 'data/fetch'
import { formatDate, formatHour, compareTime, getTodayDate, compareDates } from 'utils/timeUtil'

function UserAppointments() {

    const { data: { appointments } } = useQuery(['appointments', localStorage.userId], API.fetch.fetchAppointments)

    let title = useRef(null);

    useEffect(() => {
        gsap.from(title, {
            duration: 0.8,
            delay: .8,
            ease: "power3.out",
            y: 100
        })
    }, [title])

    appointments.sort((a, b) => {
        if (a.date > b.date) return -1
        if (a.date === b.date) {
            if (compareTime(a.timeslot_start, b.timeslot_start)) return -1;
            return 1;
        }
        if (b.date > a.date) return 1
        return 0;
    })

    const items = appointments.map((item) => {
        return (
            <div key={item.id} className="item">
                <img className="item__svg" src={compareDates(getTodayDate(), item.date) ? appointmentSvg : doneAppointmentSvg} alt="logo" />
                <div className="item__text-wrapper">
                    <h4 className="item__header">Doctor: {item.first_name} {item.last_name}</h4>
                    <p className="item__text">Date: {formatDate(item.date)}</p>
                    <p className="item__text">Time of appointment: {formatHour(item.timeslot_start)} to: {formatHour(item.timeslot_end)}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="user-appointments">
            <h1 >
                <div className="line-wrap">
                    <div ref={el => (title = el)} className="line">
                        Your scheduled appointments.
                    </div>
                </div>
            </h1>
            <ScrollableList items={items} />
        </div>
    )
}

export default UserAppointments;