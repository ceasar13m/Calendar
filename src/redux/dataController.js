import React, {Component} from "react";


class DataController{


    constructor(App) {
        this.App = App;
        this.calendarState = {
            date: new Date()
        };
    }


    monthIncr() {
        this.App.onDataChanged(this.calendarState);
    }

    monthDecr() {
        this.App.onDataChanged(this.calendarState);
    }


    getState() {
        return this.calendarState;
    }

}

export default DataController;