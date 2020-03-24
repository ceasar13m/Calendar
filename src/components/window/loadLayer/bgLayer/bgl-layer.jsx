import React, {Component} from "react";
import s from "./bgl-layer.module.css"


class BackGroundLoadingLayer extends Component {

    render() {

        return (
            <div
                id={'bgLayerId'}
                className={s.bgLayer}/>
        );
    }

}


export default BackGroundLoadingLayer;