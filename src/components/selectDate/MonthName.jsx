import React, {Component} from "react";
import s from "./MonthName.module.css"


class MonthName extends Component{
    render() {

        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];


        return (
            <div className={s.month}>
                <h1>{monthNames[this.props.dataController.getState().date.getMonth()]}</h1>

                <h1>{this.props.dataController.getState().date.getFullYear()}</h1>
            </div>
        )
    }
}

export default MonthName;