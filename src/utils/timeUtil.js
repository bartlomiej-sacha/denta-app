import moment from 'moment';
import 'moment/locale/pl';

let myMoment = moment;
myMoment.locale('en-US')

export const getTodayDate = () => {
    return moment().format('YYYY-MM-DD')
}

export const formatDate = string => {
    const date = myMoment(string).format('LL')
    return date;
}

export const formatHour = string => {
    return string.slice(0, 5)
}

const toSeconds = (string) => {
    let timeArray = string.split(':');
    return Number.parseInt(timeArray[0]) * 3600 + Number.parseInt(timeArray[1]) * 60;
}

export const getTimeslotsArray = (from, to, duration, existingTimeslots) => {

    const secondsFrom = toSeconds(from);
    const secondsTo = toSeconds(to);
    const timeDiff = (secondsTo - secondsFrom);
    const numberOfAppointments = timeDiff / toSeconds(duration);

    let firstTimeslot = from;

    const timeslotsArray = [];
    timeslotsArray.push(firstTimeslot.substr(0, 5))

    for (let i = 0; i < numberOfAppointments; i++) {
        timeslotsArray.push(new Date(addTime(firstTimeslot, duration) * 1000).toISOString().substr(11, 5));
        firstTimeslot = new Date(addTime(firstTimeslot, duration) * 1000).toISOString().substr(11, 8);
    }

    const existingTimeslotsArray = existingTimeslots.timeslots.map(value => {
        return formatHour(value.timeslot_start)
    })

    const filteredTimeslotsArray = timeslotsArray.filter((el) => !existingTimeslotsArray.includes(el));
    return filteredTimeslotsArray.length === 0 ? (function () { throw Error }()) : filteredTimeslotsArray;
}

export const addTime = (time, duration) => {
    return toSeconds(time) + toSeconds(duration);
}


export const caclTimeslotEnd = (timeslot, duration) => {
    return new Date(addTime(timeslot, duration) * 1000).toISOString().substr(11, 5);
}


export const stringDateIncrement = (string, days = 1) => {
    return myMoment(string).add(days, 'days').format('YYYY-MM-DD')
}

export const stringDateDecrement = (string, days = 1) => {
    return myMoment(string).subtract(days, 'days').format('YYYY-MM-DD')
}

export const compareTime = (timeA, timeB) => {
    const momentTimeA = myMoment(timeA, 'h:mma')
    const momentTimeB = myMoment(timeB, 'h:mma')
    return momentTimeA.isBefore(momentTimeB);
}

export const compareDates = (dateA, dateB) => {
    const momentDateA = myMoment(dateA)
    const momentDateB = myMoment(dateB)
    return momentDateA.isBefore(momentDateB);
}