import {addEvent, deleteEvent, getEventsForMonth} from "../services/network-service";

class DataController {


    constructor(App) {
        this.App = App;
        this.calendarState = {
            calendar: {
                date: new Date()
            },

            monthEvents: new Map(),
            loadings: false,
            window: false,
        }

    }


    /**
     *
     * @param event
     * @returns {Promise<void>}
     */
    async addEvent(event) {
        await addEvent(event);
        this.calendarState.monthEvents.set(event.id, event);
        this.App.onMonthEventsChanged({
            monthEvents: this.calendarState.monthEvents
        });
    }


    /**
     *
     * @param id
     * @returns {Promise<void>}
     */
    async deleteEvent(event) {
        await deleteEvent(event);
        this.calendarState.monthEvents.delete(event.id);
        this.App.onMonthEventsChanged({
            monthEvents: this.calendarState.monthEvents
        });
    }


    async showEventsWindow(date) {
        this.calendarState.calendar.date = date;
        this.App.onCalendarChanged({
            calendar: this.calendarState.calendar
        });

        await this.getEvents();
        this.App.onMonthEventsChanged({
            monthEvents: this.calendarState.monthEvents,
        });

        this.calendarState.window = true;
        this.App.onWindowChanged({
            window: this.calendarState.window,
        });


    }


    hideEventsWindow() {
        this.calendarState.window = false;
        this.App.onWindowChanged({
            window: this.calendarState.window,
        });

    }


    monthIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() + 1,
        );

        this.App.onCalendarChanged({
            calendar: this.calendarState.calendar
        });
    }

    monthDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() - 1,
        );

        this.App.onCalendarChanged({
            calendar: this.calendarState.calendar
        });
    }

    yearIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() + 1,
            this.calendarState.calendar.date.getMonth()
        );


        this.App.onCalendarChanged({
            calendar: this.calendarState.calendar
        });
    }

    yearDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() - 1,
            this.calendarState.calendar.date.getMonth()
        );

        this.App.onCalendarChanged({
            calendar: this.calendarState.calendar
        });

    }

    async getEvents() {
        this.calendarState.monthEvents = new Map();
        return await getEventsForMonth(this.calendarState.calendar.date)
            .then(response => response.json())
            .then(resp => {
                for (let event of resp.arrayList) {
                    event.date = new Date(event.date);
                    this.calendarState.monthEvents.set(event.id, event);
                }

            })
            .catch(err => console.log(err));

    }




    getState() {
        return this.calendarState;
    }

}

export default DataController;