class DataController {


    constructor(App) {
        this.App = App;
        this.calendarState = {
            calendar: {
                date: new Date()
            },
            events: [],
            loadings: false
        }
    }


    monthIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() + 1
        );

        this.App.onCalendarChanged({
            date: this.calendarState.calendar.date
        });
    }

    monthDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() - 1
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