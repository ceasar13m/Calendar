import React, {Component} from "react";
import s from "./index.module.css"
import MakeList from "./makeList";
import BackGroundLayer from "../bgLayer";


class EventsWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const event = {
            id: Date.now(),
            date: this.props.date,
            description: this.state.text,
        };

        this.props.dataController.addEvent(event);

        this.setState(state => ({
            ...this.state,
            text: ''
        }));
    }

    render() {

        let windowVisibleStile = this.props.window ? {display: 'block'} : {display: 'none'};
        return (
            <div style={windowVisibleStile}>
                <BackGroundLayer dataController={this.props.dataController}/>

                <div className={s.FormContainer}>
                    <div className={s.row}>
                        <div className={s.title}>
                            <h3>Events</h3>
                        </div>
                        <button className={s.closeButton}
                                onClick={() => {
                                    this.props.dataController.hideEventsWindow()
                                }}>X
                        </button>
                    </div>
                    <div className={s.nameModal}>
                        <h1>
                            {this.props.date.getDate() + '.'}
                            {((this.props.date.getMonth() + 1 < 10) ?
                                ('0' + (this.props.date.getMonth() + 1)) : (this.props.date.getMonth() + 1)) + '.'}
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
                        <MakeList dataController = {this.props.dataController} events={this.props.events}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventsWindow;