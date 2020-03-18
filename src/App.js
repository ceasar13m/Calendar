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
            monthEvents: [
                {

                }
            ],
            loadings: true/false
            window: true/false
        }
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataController = new DataController(this);
        this.state = this.dataController.getState();
        this.events = [];
    }


    onCalendarChanged(calendarNewState) {
        debugger
        this.setState({
            ...this.state,
            calendar: calendarNewState,
        });
    }


    onMonthEventsChanged(monthEventsNewState) {
        this.setState({
            ...this.state,
            monthEvents: monthEventsNewState.monthEvents,
        });

        console.log(this.state.monthEvents)
        // for (let i = 0; i < this.state.monthEvents.length; i++) {
        //     if (this.state.monthEvents[i].date.getMonth() === this.state.calendar.date.getMonth() &&
        //         this.state.monthEvents[i].date.getDate() === this.state.calendar.date.getDate() &&
        //         this.state.monthEvents[i].date.getFullYear() === this.state.calendar.date.getFullYear()) {
        //         this.events.push(this.props.monthEvents[i].descriptions);
        //     }
        //
        // }
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
            window: windowNewState.window,
            calendar: windowNewState.calendar,
        });
    }

    render() {
        console.log(this.state.calendar.date)
        return (
            <div id='calendar'>

                <EventsWindow date = {this.state.calendar.date} window={this.state.window} dataController={this.dataController}
                              monthEvents={this.state.monthEvents} events = {this.events}/>

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