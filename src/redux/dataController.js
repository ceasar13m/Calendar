

let state = {
    date: new Date()
};


class DataController {

    constructor(App) {
        this.App = App;
    }


    monthIncr() {
        state.date = new Date(2020, state.date.getMonth() + 1);
        this.App.onDataChanged(state);
    }

    monthDecr() {
        state.date = new Date(2020, state.date.getMonth() - 1);
        this.App.onDataChanged(state);
    }

    stateUpdate() {
        // this.getState().setState({date: state.date});
    }

    getState() {
        return state;
    }

}

export default DataController;