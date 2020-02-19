import React, {Component} from "react";


class DataController extends Component{


    constructor(App) {
        super(App);
        this.App = App;
        this.state = {
            date: new Date()
        };
    }


    monthIncr() {
        this.App.onDataChanged(this.state);
        this.setState({date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1)});
    }

    monthDecr() {
        this.App.onDataChanged(this.state);
        this.setState({date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1)});
    }


    getState() {
        return this.state;
    }

}

export default DataController;