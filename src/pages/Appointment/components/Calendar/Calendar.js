import React, { useMemo, useRef } from 'react'
import { useQuery } from 'react-query';
import API from 'data/fetch'
import { toast } from 'react-toastify';
import back from '../../../../assets/back-arrow.svg';
import forward from '../../../../assets/forward-arrow.svg';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getTodayDate, formatDate, stringDateIncrement, stringDateDecrement, caclTimeslotEnd } from 'utils/timeUtil'
import TimeslotsList from './components/TimeslotsList/TimeslotsList'
import { Button } from 'components'
import { SuspenseErrorBoundary } from 'components'

function Calendar() {
    let date = getTodayDate();

    //pobieranie doktorow
    const { data: { doctors } } = useQuery(['doctors'], API.fetch.fetchDoctors)

    //ustawienie wybranego doktora na pierwszego a daty na dzisiejszą
    const [selectedDoctorId, setSelectedDoctorId] = React.useState(1);
    const [selectedDate, setSelectedDate] = React.useState(date);

    //ustawianie key propsa dla komponentu SuspenseErrorBoundary by zmienial swój stan w celach ponownego renderu
    const [boundaryKey, setBoundaryKey] = React.useState(1);


    //zmienna przechowujaca wybrany timeslot przez uzytkownika z child componentu
    const [selectedTimeslot, setSelectedTimeslot] = React.useState(null);

    const incrementDay = () => {
        setBoundaryKey(boundaryKey + 1);
        setSelectedDate(stringDateIncrement(selectedDate));
    }
    const decrementDay = () => {
        setBoundaryKey(boundaryKey + 1);
        setSelectedDate(stringDateDecrement(selectedDate));
    }
    const handleChange = (event) => {
        setBoundaryKey(boundaryKey + 1);
        setSelectedDoctorId(event.target.value);

    };

    //zmienna przechowujaca wybrany dzien w ktorym uzytkownik wybral godzine wizyty
    const [selectedDay, setSelectedDay] = React.useState(null);

    const handleTimeslotChange = (timeslot, day) => {
        setSelectedTimeslot(timeslot);
        setSelectedDay(day)
    }

    const selectDoctors = useMemo(() => doctors.map(({ first_name, id, last_name }) => {
        return <MenuItem key={id} value={id}>{`${first_name} ${last_name}`}</MenuItem>
    }), [doctors])


    const ref = useRef(null);

    const handleRefetch = () => {
        ref.current();
    }

    const handleBookBtnClick = async () => {
        try {

            const data = { date: selectedDay, timeslot_start: selectedTimeslot, timeslot_end: caclTimeslotEnd(selectedTimeslot, '00:30'), is_available: 1, doctor_id: selectedDoctorId, day: selectedDay }

            const response = await API.fetch.postAppointment(localStorage.userId, data);

            if (response.error) {
                toast.error(response.error);
            }

            if (response.response) {
                toast.success(response.response);
                handleRefetch();
                setSelectedTimeslot(null);
            }

        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <div className="calendar">
            <div className="calendar__form">
                <FormControl>
                    <InputLabel id="select-label">Doctor</InputLabel>
                    <Select
                        labelId="select-label"
                        id="demo-simple-select"
                        value={selectedDoctorId}
                        onChange={handleChange}
                    >
                        {selectDoctors.map(doctor => {
                            return doctor;
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className="calendar__button">
                <Button onClick={handleBookBtnClick} disabled={selectedTimeslot !== null ? false : true} color='primary' variant='outlined'>BOOK NOW</Button>
            </div>
            <div className="calendar__picker">
                <div className="calendar__button-svg" onClick={decrementDay}>
                    <img className="svg__icon" src={back} alt="logo" height="14px" width="14px" />
                </div>
                <div className="calendar__day">
                    <h5>{formatDate(selectedDate)}</h5>
                    <div className="calendar__timeslots">
                        <SuspenseErrorBoundary key={boundaryKey}>
                            <TimeslotsList refFetch={ref} selectedDay={selectedDay} onTimeslotChange={handleTimeslotChange} date={selectedDate} selectedDoctorId={selectedDoctorId} />
                        </SuspenseErrorBoundary>
                    </div>
                </div>
                <div className="calendar__day calendar__day--hidden-fourth">
                    <h5>{formatDate(stringDateIncrement(selectedDate))}</h5>
                    <div className="calendar__timeslots">
                        <SuspenseErrorBoundary key={boundaryKey}>
                            <TimeslotsList refFetch={ref} selectedDay={selectedDay} onTimeslotChange={handleTimeslotChange} date={stringDateIncrement(selectedDate)} selectedDoctorId={selectedDoctorId} />
                        </SuspenseErrorBoundary>
                    </div>
                </div>
                <div className="calendar__day calendar__day--hidden-third">
                    <h5>{formatDate(stringDateIncrement(selectedDate, 2))}</h5>
                    <div className="calendar__timeslots">
                        <SuspenseErrorBoundary key={boundaryKey}>
                            <TimeslotsList refFetch={ref} selectedDay={selectedDay} onTimeslotChange={handleTimeslotChange} date={stringDateIncrement(selectedDate, 2)} selectedDoctorId={selectedDoctorId} />
                        </SuspenseErrorBoundary>
                    </div>
                </div>
                <div className="calendar__day calendar__day--hidden-second">
                    <h5>{formatDate(stringDateIncrement(selectedDate, 3))}</h5>
                    <div className="calendar__timeslots">
                        <SuspenseErrorBoundary key={boundaryKey}>
                            <TimeslotsList refFetch={ref} selectedDay={selectedDay} onTimeslotChange={handleTimeslotChange} date={stringDateIncrement(selectedDate, 3)} selectedDoctorId={selectedDoctorId} />
                        </SuspenseErrorBoundary>
                    </div>
                </div>
                <div className="calendar__day calendar__day--hidden-first">
                    <h5>{formatDate(stringDateIncrement(selectedDate, 4))}</h5>
                    <div className="calendar__timeslots">
                        <SuspenseErrorBoundary key={boundaryKey}>
                            <TimeslotsList refFetch={ref} selectedDay={selectedDay} onTimeslotChange={handleTimeslotChange} date={stringDateIncrement(selectedDate, 4)} selectedDoctorId={selectedDoctorId} />
                        </SuspenseErrorBoundary>
                    </div>
                </div>
                <div className="calendar__button-svg" onClick={incrementDay}>
                    <img className="svg__icon" src={forward} alt="logo" height="14px" width="14px" />
                </div>
            </div>
        </div >
    )
}

export default Calendar;


