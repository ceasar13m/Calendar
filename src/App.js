import React from 'react';
import s from './App.module.css';
import Calendar from "./services/calendar";
import DateSelect from "./components/selectDate/DateSelect";
import DataController from "./redux/dataController";
import LeftButton from "./components/navigationButtons/leftButton/leftButton";
import RightButton from "./components/navigationButtons/rightButton/rightButton";
import EventsWindow from "./components/window/eventsWindow/events-window";
import LoadLayer from "./components/window/loadLayer/load-layer";

/**
 * this.state = {
            calendar: {
                date: new Date()
            },
            events: new Map(),
            loadings: true/false
            window: true/false
        }
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataController = new DataController(this);
        this.state = this.dataController.getState();
    }


    onCalendarChanged(calendarNewState) {
        this.setState({
            ...this.state,
            calendar: calendarNewState.calendar,
        });
    }


    onEventsChanged(monthEventsNewState) {
        this.setState({
            ...this.state,
            events: monthEventsNewState.events,
        });


    }


    onEventsLoaderChanged(loadingNewState) {
        this.setState({
            ...this.state,
            loadings: loadingNewState.loadings
        });
    }


    onWindowChanged(windowNewState) {
        this.setState({
            ...this.state,
            window: windowNewState.window,
        });
    }


    onCountsChanged(countsNewState) {
        this.setState({
            ...this.state,
            counts: countsNewState.counts
        });
    }

    render() {

        return (
            <div id='calendar'>
                <LoadLayer loadings = {this.state.loadings}/>

                <EventsWindow date = {this.state.calendar.date} window={this.state.window} dataController={this.dataController}
                              events={this.state.events}/>

                <DateSelect dataController={this.dataController} date={this.state.calendar.date}/>

                <div className={s.calendar}>


                    <LeftButton dataController={this.dataController}/>

                    <div className={s.calendarTable}>
                        <Calendar counts = {this.state.counts} dataController={this.dataController} date={this.state.calendar.date}/>
                    </div>

                    <RightButton dataController={this.dataController}/>


                </div>

            </div>
        )


    }
}

export default App;