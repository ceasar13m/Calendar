import React from 'react';
import s from './App.module.css';
import Calendar from "./components/calendar";
import DateSelect from "./components/selectDate/DateSelect";
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

                <DateSelect dataController={this.dataController}/>

                <div className={s.calendar}>


                    <LeftButton dataController={this.dataController}/>

                    <div className={s.calendarTable}>
                        <Calendar date={this.state.date}/>
                    </div>

                    <RightButton dataController={this.dataController}/>


                </div>

            </div>
        );
    }
}

export default App;
