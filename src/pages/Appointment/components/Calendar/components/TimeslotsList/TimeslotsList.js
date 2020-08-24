import React, { Fragment, useEffect, useState } from 'react'
import { getTimeslotsArray } from 'utils/timeUtil'
import ToggleButton from '@material-ui/lab/ToggleButton';
import { ToggleButtonGroup } from '@material-ui/lab';
import { useQuery } from 'react-query';
import API from 'data/fetch'

function TimeslotsList({ date, selectedDoctorId, onTimeslotChange, selectedDay, refFetch }) {

    const { data: { day } } = useQuery(['day', selectedDoctorId, date], API.fetch.fetchDoctorDayOfWork, { retry: false })
    const { data: timeslots, refetch } = useQuery(['timeslots', selectedDoctorId, date], API.fetch.fetchTimeslots, { retry: false })

    const [selectedTimeslot, setSelectedTimeslot] = useState(null);

    useEffect(() => {
        if (selectedDay !== date) {
            setSelectedTimeslot(null);
        }
    }, [selectedDay, date])

    const availableFrom = day.available_from;
    const availableTo = day.available_to;
    const appointmentDuraction = day.appointment_duration;

    const handleDateClick = (event, newTimeslot) => {
        refFetch.current = refetch;
        setSelectedTimeslot(newTimeslot);
        onTimeslotChange(newTimeslot, date)
    };

    const timeslotsArray = getTimeslotsArray(availableFrom, availableTo, appointmentDuraction, timeslots)

    return (
        < Fragment >
            <ToggleButtonGroup
                value={selectedTimeslot}
                exclusive
                color='primary'
                onChange={handleDateClick}
                aria-label="text alignment"
                orientation="vertical"
            >
                {timeslotsArray.map((timeslot) => {
                    return <ToggleButton key={timeslot} color={'primary'} value={timeslot}>
                        {timeslot}
                    </ToggleButton>
                })}
            </ToggleButtonGroup>
        </Fragment >
    )
}

export default TimeslotsList;