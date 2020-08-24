import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Calendar from './components/Calendar/Calendar'

function Appointment() {

    let title = useRef(null);

    useEffect(() => {
        gsap.from(title, {
            duration: 0.8,
            delay: .8,
            ease: "power3.out",
            y: 64
        })
    }, [title])

    return (
        <div className="appointment">
            <h1 >
                <div className="line-wrap">
                    <div ref={el => (title = el)} className="line">
                        Schedule an appointment.
                    </div>
                </div>
            </h1>
            <Calendar />
        </div>
    )
}

export default Appointment;