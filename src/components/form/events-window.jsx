import React, {Component} from "react";
import s from "./events-winow.module.css"


class EventsWindow extends Component {

    closeWindow = () => {
        let thisWindow = document.getElementById('window');
        thisWindow.style.display = 'none';

        let bgLayerId = document.getElementById('bgLayerId');
        bgLayerId.style.display = 'none';
    }

    render() {
        return (
            <div>
                <div id={'bgLayerId'} className={s.bgLayer}/>
                <div id={'window'} className={s.FormContainer}>


                    <div className={s.row}>
                        <div className={s.title}>Events</div>
                        <button className={s.closeButton} onClick={this.closeWindow}>x</button>
                    </div>
                </div>

            </div>
        );
    }

}


export default EventsWindow;