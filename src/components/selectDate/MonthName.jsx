import React, {Component} from "react";
import s from "./MonthName.module.css"


class MonthName extends Component{
    render() {

        const monthNames = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ];


        return (
            <div className={s.month}>
                <h1 className={s.monthName}>{monthNames[this.props.dataController.getState().date.getMonth()]}</h1>

                <h1 className={s.year}>{this.props.dataController.getState().date.getFullYear()}</h1>
            </div>
        )
    }
}

export default MonthName;