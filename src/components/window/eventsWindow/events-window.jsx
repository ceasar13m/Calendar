import React, {Component} from "react";
import s from "./events-winow.module.css"
import BackGroundLayer from "../bgLayer/bg-layer";
import MakeList from "./makeList";


class EventsWindow extends Component {


    constructor(props) {
        super(props);

        this.events = [];

        for (let i = 0; i < this.props.monthEvents.length; i++) {
            if (this.props.monthEvents[i].date.getMonth() === this.props.date.getMonth() &&
                this.props.monthEvents[i].date.getDate() === this.props.date.getDate() &&
                this.props.monthEvents[i].date.getFullYear() === this.props.date.getFullYear()) {

                this.events.push(this.props.monthEvents[i].descriptions);
            }

        }

        this.state = {
            descriptions: this.events,
            text: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }


    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newEvent = {
            date: this.props.date,
            description: this.state.text,
        };

        this.setState(state => ({
            descriptions: state.descriptions.concat(newEvent),
            text: ''
        }));
    }

    render() {
        let style = this.props.window ? {display: 'block'} : {display: 'none'};
        return (
            <div style={style}>
                <BackGroundLayer dataController={this.props.dataController}/>
                <div className={s.FormContainer}>
                    <div className={s.row}>
                        <div className={s.title}>
                            <h3>Events</h3>
                        </div>
                        <button className={s.closeButton}
                                onClick={() => {
                                    this.props.dataController.hideEventsWindow(
                                        {
                                            date: this.props.date,
                                            descriptions: this.state.descriptions
                                        }
                                    )
                                }}>X
                        </button>
                    </div>
                    <div className={s.nameModal}>
                        <h1>
                            {this.props.date.getDate() + '.'}
                            {((this.props.date.getMonth() < 10) ? ('0' + (this.props.date.getMonth() + 1)) : (this.props.date.getMonth())) + '.'}
                            {this.props.date.getFullYear()}
                        </h1>
                    </div>

                    <div className={s.events}>
                        <form className={s.form} onSubmit={this.handleSubmit}>
                            <div>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.text}
                                />
                            </div>
                            <div className={s.addButton}>
                                <button>
                                    Add
                                </button>
                            </div>
                        </form>


                        <MakeList events={this.state.descriptions}/>
                    </div>
                </div>

            </div>
        );
    }

}


export default EventsWindow;