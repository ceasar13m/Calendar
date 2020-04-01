import React from 'react';
import s from './App.module.css';
import Calendar from "./components/calendar";
import DateSelect from "./components/selectDate/date-select";
import DataController from "./redux/dataController";
import LeftButton from "./components/navigationButtons/leftButton/left-button";
import RightButton from "./components/navigationButtons/rightButton/right-button";
import EventsWindow from "./components/window/eventsWindow/event-window";
import LoadLayer from "./components/window/loadLayer/load-layer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataController = new DataController(this);
        this.state = this.dataController.getState();
    }

    onCalendarChanged(calendarNewState) {
        this.setState({
            calendar: calendarNewState.calendar,
        });
    }

    onEventsChanged(monthEventsNewState) {
        this.setState({
            events: monthEventsNewState.events,
        });
    }

    onEventsLoaderChanged(loadingNewState) {
        this.setState({
            loadings: loadingNewState.loadings
        });
    }

    onWindowChanged(windowNewState) {
        this.setState({
            window: windowNewState.window,
        });
    }

    onCountsChanged(countsNewState) {
        this.setState({
            counts: countsNewState.counts
        });
    }

    render() {
        return (
            <div id='calendar'>
                <LoadLayer loadings={this.state.loadings}/>

                <EventsWindow date={this.state.calendar.date}
                              window={this.state.window}
                              dataController={this.dataController}
                              events={this.state.events}/>
                <DateSelect dataController={this.dataController}
                            date={this.state.calendar.date}/>

                <div className={s.calendar}>
                    <LeftButton dataController={this.dataController}/>
                    <div className={s.calendarTable}>
                        <div className={s.block}>
                            <Calendar counts={this.state.counts}
                                      dataController={this.dataController}
                                      date={this.state.calendar.date}/>
                        </div>
                    </div>
                    <RightButton dataController={this.dataController}/>
                </div>

                <footer>
                    <div>Developed by <a href="https://github.com/ceasar13m">ceasar13m</a></div>
                    <div> Design by <a href="https://github.com/Jorlian4ik">Jorlian4ik</a></div>
                    <div>2019 - {(new Date()).getFullYear()}</div>
                </footer>
            </div>
        )
    }
}

export default App;