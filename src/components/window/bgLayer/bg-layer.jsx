import React, {Component} from "react";
import s from "./bg-layer.module.css"
import closeWindow from "../onClickFunctions/closeWindow";


class BackGroundLayer extends Component {

    render() {
        return (
            <div
                id={'bgLayerId'}
                className={s.bgLayer}
                onClick={()=> {closeWindow(this.props.dataController)}}/>
        );
    }

}


export default BackGroundLayer;