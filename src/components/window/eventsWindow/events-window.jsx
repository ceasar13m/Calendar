import React, {Component} from "react";
import s from "./events-winow.module.css"
import BackGroundLayer from "../bgLayer/bg-layer";
import MakeList from "./makeList";
import closeWindow from "../onClickFunctions/closeWindow";


class EventsWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
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
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    render() {

        let style = this.props.window ? {display:'block'} : {display:'none'};
        return (
            <div style={style}>
                <BackGroundLayer dataController={this.props.dataController}/>

                <div className={s.FormContainer}>
                    <div className={s.row}>
                        <div className={s.title}>
                            <h3>Events</h3>
                        </div>
                        <button className={s.closeButton} onClick={()=> {closeWindow(this.props.dataController)}}>X</button>
                    </div>
                    <div className={s.nameModal}>
                        <h1>
                            {this.props.date.getDate() + ' '}
                            {((this.props.date.getMonth() < 10) ?  ('0' + this.props.date.getMonth()) : (this.props.date.getMonth()) )+ ' '}
                            {this.props.date.getFullYear()}
                        </h1>
                    </div>


                    <div className={s.events}>

                        <form className={s.form} onSubmit={this.handleSubmit}>
                            <div>
                                <textarea
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

                        <MakeList items={this.state.items} itemNomber={this.state.items.length + 1}/>
                    </div>
                </div>

            </div>
        );
    }

}


export default EventsWindow;