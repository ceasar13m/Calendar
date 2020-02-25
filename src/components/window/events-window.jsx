import React, {Component} from "react";
import s from "./events-winow.module.css"
import BackGroundLayer from "./bg-layer";
import TodoList from "./TodoList";


class EventsWindow extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    closeWindow = () => {
        let thisWindow = document.getElementById('window');
        thisWindow.style.display = 'none';

        let bgLayerId = document.getElementById('bgLayerId');
        bgLayerId.style.display = 'none';
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
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


        return (
            <div>
                <BackGroundLayer />
                <div id={'window'} className={s.FormContainer}>
                    <div className={s.row}>
                        <div className={s.title}>
                            <h3>Events</h3>
                        </div>
                        <button className={s.closeButton} onClick={this.closeWindow}>X</button>
                    </div>


                    <div className={s.events}>

                        <div>
                            Что нужно сделать?
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <input
                                id="new-todo"
                                onChange={this.handleChange}
                                value={this.state.text}
                            />
                            <button>
                                Добавить #{this.state.items.length + 1}
                            </button>
                        </form>

                        <TodoList items={this.state.items} itemNomber = {this.state.items.length + 1}/>
                    </div>
                </div>

            </div>
        );
    }

}


export default EventsWindow;