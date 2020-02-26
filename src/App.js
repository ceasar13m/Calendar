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



    onWindowChanged(windowNewState) {
        this.setState({
            ...this.state,
            window: windowNewState
        });
        debugger
    }

    render() {

        return (
            <div id='calendar'>

                { this.state.window ? <EventsWindow dataController={this.dataController} events={this.state.events}/> : null }

                <DateSelect dataController={this.dataController} date={this.state.calendar.date}/>

                <div className={s.calendar}>


                    <LeftButton dataController={this.dataController}/>

                    <div className={s.calendarTable}>
                        <Calendar dataController={this.dataController} date={this.state.calendar.date}/>
                    </div>

                    <RightButton dataController={this.dataController}/>


                </div>

            </div>
        )
    }
}

export default App;
