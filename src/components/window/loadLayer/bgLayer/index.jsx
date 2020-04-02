import React, {Component} from "react";
import s from "./index.module.css"

/**
 * Темный фон для анимации
 */
class BackGroundLoadingLayer extends Component {
    render() {return <div className={s.bgLayer}/>}
}

export default BackGroundLoadingLayer;