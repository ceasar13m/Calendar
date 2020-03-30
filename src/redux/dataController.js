import {addEvent, deleteEvent, getEvent, getEventsCounts} from "../services/network-service";

class DataController {

    constructor(App) {
        this.App = App;
        this.calendarState = {
            calendar: {
                date: new Date()
            },

            events: new Map(),
            loadings: false,
            window: false,
            counts: []
        }
        this.getCounts(this.calendarState.calendar.date);
    }


    /**
     *
     * @param event
     * @returns {Promise<void>}
     */
    async addEvent(event) {
        this.calendarState.loadings = true;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });

        await addEvent(event);

        this.calendarState.loadings = false;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });

        this.calendarState.events.set(event.id, event);
        this.App.onEventsChanged({
            events: this.calendarState.events
        });
    }


    /**
     *
     * @param id
     * @returns {Promise<void>}
     */
    async deleteEvent(event) {
        this.calendarState.loadings = true;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });
        await deleteEvent(event);

        this.calendarState.loadings = false;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });

        this.calendarState.events.delete(event.id);
        this.App.onEventsChanged({
            events: this.calendarState.events
        });

    }


    async showEventsWindow(date) {
        this.calendarState.calendar.date = date;
        this.App.onCalendarChanged({
            calendar: this.calendarState.calendar
        });


        this.calendarState.loadings = true;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });


        await this.getEvents();
        this.App.onEventsChanged({
            events: this.calendarState.events,
        });

        this.calendarState.loadings = false;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });


        this.calendarState.window = true;
        this.App.onWindowChanged({
            window: this.calendarState.window,
        });


    }


    async hideEventsWindow() {
        this.calendarState.counts = [];
        await this.getCounts(this.calendarState.calendar.date);

        this.App.onCountsChanged({
            counts: this.calendarState.counts,
        });

        this.calendarState.window = false;
        this.App.onWindowChanged({
            window: this.calendarState.window,
        });

    }


    async monthIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() + 1,
        );
        await this.getCounts(this.calendarState.calendar.date);


    }

    async monthDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() - 1,
        );

        await this.getCounts(this.calendarState.calendar.date);

    }

    async yearIncr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() + 1,
            this.calendarState.calendar.date.getMonth()
        );

        await this.getCounts(this.calendarState.calendar.date);
    }

    async yearDecr() {
        this.calendarState.calendar.date = new Date(
            this.calendarState.calendar.date.getFullYear() - 1,
            this.calendarState.calendar.date.getMonth()
        );


        await this.getCounts(this.calendarState.calendar.date);


    }

    async getEvents() {
        this.calendarState.events = new Map();

        await getEvent(this.calendarState.calendar.date)
            .then(response => response.json())
            .then(resp => {
                for (let event of resp.events) {
                    event.date = new Date(event.date);
                    this.calendarState.events.set(event.id, event);
                }
            })
            .catch(err => console.log(err));

    }


    async getCounts(date) {
        this.calendarState.loadings = true;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });

        await getEventsCounts(date)
            .then(response => response.json())
            .then(resp => {
                for (let count of resp.counts) {
                    count.date = new Date(count.date);
                    this.calendarState.counts.push(count);
                }
            })
            .catch(err => console.log(err));

        this.calendarState.loadings = false;
        this.App.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });

        this.App.onCountsChanged({
            counts: this.calendarState.counts,
        });

        this.App.onCalendarChanged({
            calendar: this.calendarState.calendar
        });
    }


    getState() {
        return this.calendarState;
    }

}

export default DataController;