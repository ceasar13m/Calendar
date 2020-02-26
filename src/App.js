import React from 'react';
import s from './App.module.css';
import Calendar from "./services/calendar";
import DateSelect from "./components/selectDate/DateSelect";
import DataController from "./redux/dataController";
import LeftButton from "./components/navigationButtons/leftButton/leftButton";
import RightButton from "./components/navigationButtons/rightButton/rightButton";
import EventsWindow from "./components/window/eventsWindow/events-window";

/**
 * this.state = {
            calendar: {
                date: new Date()
            },
            events: [],
            loadings: true/false
        }
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataController = new DataController(this);
        this.state = this.dataController.getState();
        this.onCalendarChanged = this.onCalendarChanged.bind(this);
        this.state.isWindowVisible = false;
    }


    onCalendarChanged(calendarNewState) {
        this.setState({
            ...this.state,
            calendar: calendarNewState
        });
    }

    onEventsWindowChanged(eventsNewState) {
        this.setState({
            ...this.state,
            events: eventsNewState
        });
    }


    onEventsLoaderChanged(loadingNewState) {
        this.setState({
            ...this.state,
            loading: loadingNewState
        });
    }

    render() {
        return (
            <div id='calendar'>

                <EventsWindow events={this.state.events}/>

                <DateSelect dataController={this.dataController} date={this.state.calendar.date}/>

                <div className={s.calendar}>


                    <LeftButton dataController={this.dataController}/>

                    <div className={s.calendarTable}>
                        <Calendar isWindowVisible = {this.state.isWindowVisible} date={this.state.calendar.date}/>
                    </div>

                    <RightButton dataController={this.dataController}/>


                </div>

            </div>
        );
    }
}

export default App;
