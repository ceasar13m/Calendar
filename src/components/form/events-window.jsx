import React, {Component} from "react";
import s from "./events-winow.module.css"


class EventsWindow extends Component {

    render() {
        return (
            <div className={s.promptFormContainer}>

                <div style={{display:'flex', flexDirection:'row'}}>
                    <div>Events</div>
                    <div style={{marginLeft:'auto', marginRight:'1em'}}>X</div>
                </div>

                


                <form className={s.promptForm}>

                </form>
            </div>
        );
    }

}


export default EventsWindow;