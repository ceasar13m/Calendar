import React, {Component} from "react";
import s from "./bg-layer.module.css"


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