import React, {Component} from "react";
import s from "./index.module.css"

/**
 * Текущий месяц и кнопки изменения месяца
 */
class MonthSelect extends Component {
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

        let preMonthIndex = (this.props.date.getMonth() !== 0) ? this.props.date.getMonth() - 1 : this.props.date.getMonth() + 11;
        let monthIndex = this.props.date.getMonth();
        let nextMonthIndex = (this.props.date.getMonth() !== 11) ? this.props.date.getMonth() + 1 : 0;


        return (
            <div className={s.monthName}>
                <div className={s.up} onClick={() => {this.props.dataController.monthDecr();}}>
                    <div className={s.upButtonText}>
                        {monthNames[preMonthIndex]}
                    </div>
                </div>

                <div><h1 className={s.monthNameTitle}>{monthNames[monthIndex]}</h1></div>

                <div className={s.down} onClick={() => {this.props.dataController.monthIncr();}}>
                    <div className={s.downButtonText}>
                        {monthNames[nextMonthIndex]}
                    </div>
                </div>
            </div>

        )
    }
}

export default MonthSelect;