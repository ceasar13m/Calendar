import React, {Component} from "react";
import s from "./index.module.css"


/**
 * Темный фон при открытии окна
 */
class BackGroundLayer extends Component {

    render() {
        return (
            <div
                id={'bgLayerId'}
                className={s.bgLayer}
                onClick={()=> {this.props.dataController.hideEventsWindow()}}/>
        );
    }

}


export default BackGroundLayer;