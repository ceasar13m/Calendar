import React from 'react';
import s from './App.module.css';
import Calendar from "./components/calendar";
import SelectDate from "./components/selectDate/selectDate";
import DataController from "./redux/dataController";
import LeftButton from "./components/navigationButtons/leftButton/leftButton";
import RightButton from "./components/navigationButtons/rightButton/rightButton";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataController = new DataController(this);
        this.state = this.dataController.getState();
        this.onDataChanged = this.onDataChanged.bind(this);
    }


    onDataChanged(newData) {
        this.setState(newData);
    }

    render() {
        return (
            <div>
                <SelectDate/>
                <div className={s.calendar}>
                    <div className={s.navigationButton}>
                        <LeftButton dataController={this.dataController}/>
                    </div>
                    <div className={s.calendarTable}>
                        <Calendar  dataController={this.dataController}/>
                    </div>
                    <div className={s.navigationButton}>
                        <RightButton dataController={this.dataController} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
