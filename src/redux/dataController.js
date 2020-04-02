import {addEvent, deleteEvent, getEvent, getEventsCounts} from "../services/network-service";


/**
 * Координация и синхронизация изменений в UI и BLL
 */
class DataController {

    constructor(App) {
        this.app = App;
        this.calendarState = {
            calendar: {
                date: new Date()
            },
            events: new Map(),
            loadings: false,
            window: false,
            counts: []
        }
        this.getEventsCounts(this.calendarState.calendar.date);
    }


    /**
     *
     * @param event
     * @returns {Promise<void>}
     */
    async addEvent(event) {
        this.showLoadingAnimation();
        await addEvent(event);
        this.hideLoadingAnimation();
        let events = this.calendarState.events;
        events.set(event.id, event);
        this.calendarState = {
            ...this.calendarState,
            events: events
        };
        this.app.onEventsChanged({
            events: this.calendarState.events
        });
    }


    /**
     *
     * @param id
     * @returns {Promise<void>}
     */
    async deleteEvent(event) {
        this.showLoadingAnimation();
        await deleteEvent(event);
        this.hideLoadingAnimation();
        let events = this.calendarState.events;
        events.delete(event.id);
        this.calendarState = {
            ...this.calendarState,
            events: events
        };
        this.app.onEventsChanged({
            events: this.calendarState.events
        });

    }


    async showEventsWindow(date) {
        this.calendarState = {
            ...this.calendarState,
            calendar: {date: date}
        };
        this.app.onCalendarChanged({
            calendar: this.calendarState.calendar
        });
        this.showLoadingAnimation();
        await this.getEvents();
        this.app.onEventsChanged({
            events: this.calendarState.events,
        });
        this.hideLoadingAnimation();
        this.calendarState = {
            ...this.calendarState,
            window: true
        }
        this.app.onWindowChanged({
            window: this.calendarState.window,
        });
    }


    async hideEventsWindow() {
        this.calendarState = {
            ...this.calendarState,
            counts: []
        }
        await this.getEventsCounts(this.calendarState.calendar.date);
        this.app.onCountsChanged({
            counts: this.calendarState.counts,
        });
        this.calendarState = {
            ...this.calendarState,
            window: false
        }
        this.app.onWindowChanged({
            window: this.calendarState.window,
        });

    }

    async monthIncr() {
        let date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() + 1,
            this.calendarState.calendar.date.getDate(),
            this.calendarState.calendar.date.getHours(),
            this.calendarState.calendar.date.getMinutes()
        );
        this.calendarState = {
            ...this.calendarState,
            calendar: {date: date}
        }
        await this.getEventsCounts(this.calendarState.calendar.date);
        this.app.onCalendarChanged({
            calendar: this.calendarState.calendar
        })
    }

    async monthDecr() {
        let date = new Date(
            this.calendarState.calendar.date.getFullYear(),
            this.calendarState.calendar.date.getMonth() - 1,
            this.calendarState.calendar.date.getDate(),
            this.calendarState.calendar.date.getHours(),
            this.calendarState.calendar.date.getMinutes()
        );
        this.calendarState = {
            ...this.calendarState,
            calendar: {date: date}
        }
        this.app.onCalendarChanged({
            calendar: this.calendarState.calendar
        })
        await this.getEventsCounts(this.calendarState.calendar.date);

    }

    async yearIncr() {
        let date = new Date(
            this.calendarState.calendar.date.getFullYear() + 1,
            this.calendarState.calendar.date.getMonth(),
            this.calendarState.calendar.date.getDate(),
            this.calendarState.calendar.date.getHours(),
            this.calendarState.calendar.date.getMinutes()
        );
        this.calendarState = {
            ...this.calendarState,
            calendar: {date: date}
        }
        this.app.onCalendarChanged({
            calendar: this.calendarState.calendar
        })
        await this.getEventsCounts(this.calendarState.calendar.date);
    }

    async yearDecr() {
        let date = new Date(
            this.calendarState.calendar.date.getFullYear() - 1,
            this.calendarState.calendar.date.getMonth(),
            this.calendarState.calendar.date.getDate(),
            this.calendarState.calendar.date.getHours(),
            this.calendarState.calendar.date.getMinutes()
        );
        this.calendarState = {
            ...this.calendarState,
            calendar: {date: date}
        }
        this.app.onCalendarChanged({
            calendar: this.calendarState.calendar
        })
        await this.getEventsCounts(this.calendarState.calendar.date);
    }

    async getEvents() {
        this.calendarState.events = new Map();
        await getEvent(this.calendarState.calendar.date)
            .then(response => response.json())
            .then(json => {
                for (let event of json.events) {
                    event.date = new Date(event.date);
                    this.calendarState.events.set(event.id, event);
                }
            })
            .catch(err => console.log(err));

    }


    async getEventsCounts(date) {
        this.showLoadingAnimation();
        await getEventsCounts(date)
            .then(response => response.json())
            .then(json => {

                let counts = json.counts.map(value => {
                    value.date = new Date(value.date);
                    return value;
                });
                debugger
                this.calendarState = {
                    ...this.calendarState,
                    counts: [
                        ...this.calendarState.counts,
                        ...counts
                    ]
                }
                debugger
                this.app.onCountsChanged({
                    counts: this.calendarState.counts,
                });
                this.hideLoadingAnimation();
            })
            .catch(err => {
                this.hideLoadingAnimation();
                console.log(err)
            });


    }


    getState() {
        return this.calendarState;
    }


    showLoadingAnimation() {
        this.calendarState = {
            ...this.calendarState,
            loadings: true
        }
        this.app.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });
    }


    hideLoadingAnimation() {
        this.calendarState = {
            ...this.calendarState,
            loadings: false
        }
        this.app.onEventsLoaderChanged({
            loadings: this.calendarState.loadings,
        });
    }

}

export default DataController;