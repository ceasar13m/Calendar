class DataController {


    constructor(App) {
        this.App = App;
        this.calendarState = {
            date: new Date()
        };
    }


    monthIncr() {
        this.calendarState.date = new Date(
            this.calendarState.date.getFullYear(),
            this.calendarState.date.getMonth() + 1
        );

        this.App.onDataChanged(this.calendarState);
    }

    monthDecr() {
        this.calendarState.date = new Date(
            this.calendarState.date.getFullYear(),
            this.calendarState.date.getMonth() - 1
        );

        this.App.onDataChanged(this.calendarState);
    }

    yearIncr() {
        this.calendarState.date = new Date(
            this.calendarState.date.getFullYear() + 1,
            this.calendarState.date.getMonth()
        );

        this.App.onDataChanged(this.calendarState);
    }

    yearDecr() {
        this.calendarState.date = new Date(
            this.calendarState.date.getFullYear() - 1,
            this.calendarState.date.getMonth()
        );

        this.App.onDataChanged(this.calendarState);
    }


    getState() {
        return this.calendarState;
    }

}

export default DataController;