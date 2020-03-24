import React, {Component} from "react";
import s from "../../window/eventsWindow/events-winow.module.css";
import MakeList from "../../window/eventsWindow/makeList/makeList";


class Events extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {items: [], text: ''};
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    render() {




        return (
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
        )
    }
}


export default Events;