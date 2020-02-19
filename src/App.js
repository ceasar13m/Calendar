import React from 'react';
import s from './App.module.css';
import Calendar from "./components/calendar";
import MonthName from "./components/selectDate/MonthName";
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
                <div className={s.monthName}>
                    <MonthName dataController={this.dataController}/>
                </div>
                <div className={s.calendar}>
                    <div className={s.navigationButton} >
                        <LeftButton dataController={this.dataController}/>
                    </div>
                    <div className={s.calendarTable}>
                        <Calendar date={this.dataController.getState().date}/>
                    </div>
                    <div className={s.navigationButton}>
                        <RightButton dataController={this.dataController}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;