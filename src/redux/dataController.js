import {getEventsForMonth} from "../services/network-service";

class DataController {


    constructor(App) {
        this.App = App;
        this.calendarState = {
            calendar: {
                date: new Date()
            },
            monthEvents: [
                {
                    date: new Date(2020, 2, 8),
                    descriptions: ['New year', 'Hello Kitty']
                },
            ],
            loadings: false,
            window: false,
        }

    }


    showEventsWindow(date) {
        debugger
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
        debugger
        this.calendarState.window = false;
        this.calendarState.events = events;

        this.App.onWindowChanged({
            window: this.calendarState.window,
            calendar: this.calendarState.calendar,
            monthEvents: this.calendarState.monthEvents.push(events)
        });
    }


    monthIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() + 1,
        );


        this.App.onCalendarChanged({
            date: this.calendarState.calendar.date
        });

        getEventsForMonth(this.calendarState.calendar.date);
    }

    monthDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() - 1,
        );

        this.App.onCalendarChanged({
            date: this.calendarState.calendar.date
        });
    }

    yearIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() + 1,
            this.calendarState.calendar.date.getMonth()
        );

        this.App.onCalendarChanged({
            date: this.calendarState.calendar.date
        });
    }

    yearDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() - 1,
            this.calendarState.calendar.date.getMonth()
        );

        this.App.onCalendarChanged({
            date: this.calendarState.calendar.date
        });
    }


    getState() {
        return this.calendarState;
    }

}

export default DataController;