import {addEvent, getEventsForMonth} from "../services/network-service";

class DataController {


    constructor(App) {
        this.App = App;
        this.calendarState = {
            calendar: {
                date: new Date()
            },

            monthEvents: [
                {
                    date: new Date(2020, 11 - 1, 11),
                    description: "Hello"
                }
            ],
            loadings: false,
            window: false,
        }

    }


    showEventsWindow(date) {
        this.calendarState.window = true;
        this.calendarState.calendar.date = date;

        this.App.onWindowChanged({
            window: this.calendarState.window,
            calendar: {
                date: date
            },
        });


    }


    hideEventsWindow(events) {
        this.calendarState.window = false;
        // this.calendarState.monthEvents.push(events)

        this.calendarState.monthEvents[events.date.getDate()] = events;
        this.App.onWindowChanged({
            window: this.calendarState.window,
            calendar: this.calendarState.calendar,
            monthEvents: this.calendarState.monthEvents
        });

        addEvent(events);
    }


    monthIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() + 1,
        );
        this.getEvents();
    }

    monthDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() - 1,
        );
        this.getEvents();
    }

    yearIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() + 1,
            this.calendarState.calendar.date.getMonth()
        );
        this.getEvents();
    }

    yearDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() - 1,
            this.calendarState.calendar.date.getMonth()
        );
        this.getEvents();
    }

    getEvents() {
        getEventsForMonth(this.calendarState.calendar.date)
            .then(response => response.json())
            .then(resp => {
                this.calendarState.monthEvents = resp.arrayList;
                for (let i = 0; i < this.calendarState.monthEvents.length; i++) {
                    let date = new Date(this.calendarState.monthEvents[i].date)
                    this.calendarState.monthEvents[i].date = date;
                    debugger
                }

                debugger
                console.log(this.calendarState.monthEvents)

                this.App.onCalendarChanged({
                    calendar: this.calendarState.calendar
                });

                this.App.onMonthEventsChanged({
                    monthEvents: this.calendarState.monthEvents,
                });

                debugger
            })
            .catch(err => console.log(err));


    }




    getState() {
        return this.calendarState;
    }

}

export default DataController;