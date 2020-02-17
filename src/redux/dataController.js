

let state = {
    year: 2020,
    month: 3,
};


class DataController {

    constructor(App) {
        this.App = App;
    }


    monthIncr() {
        state.month =+ 1;
        this.App.onDataChanged(state);
    }

    monthDecr() {
        state.month =- 1;
        this.App.onDataChanged(state);
    }

    getState() {
        return state;
    }

}

export default DataController;