import React, {Component} from "react";
import s from "./MonthSelect.module.css"


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

        let monthClickDown = () => {
            this.props.dataController.monthDecr();
        };

        let monthClickUp = () => {
            this.props.dataController.monthIncr();
        };


        return (
            <div className={s.monthName}>

                <div className={s.up} onClick={monthClickUp}>
                    <div className={s.upButtonText}>next</div>
                </div>


                <div>
                    <h1 className={s.monthNameTitle}>{monthNames[this.props.date.getMonth()]}</h1>
                </div>


                <div className={s.down} onClick={monthClickDown}>
                    <div className={s.downButtonText}>previous</div>
                </div>

            </div>

        )
    }
}

export default MonthSelect;