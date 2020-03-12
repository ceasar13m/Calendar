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
                    date: new Date(2020, 2, 8),
                    descriptions: [
                        {
                            date: new Date(),
                            descriptions: ["Hello", "Bye"]
                        }
                    ]
                },
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
        this.calendarState.monthEvents.push(events)

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
        getEventsForMonth(this.calendarState.calendar.date);
    }

    yearIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() + 1,
            this.calendarState.calendar.date.getMonth()
        );

        this.App.onCalendarChanged({
            date: this.calendarState.calendar.date
        });
        getEventsForMonth(this.calendarState.calendar.date);
    }

    yearDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() - 1,
            this.calendarState.calendar.date.getMonth()
        );

        this.App.onCalendarChanged({
            date: this.calendarState.calendar.date
        });
        getEventsForMonth(this.calendarState.calendar.date);
    }


    getState() {
        return this.calendarState;
    }

}

export default DataController;