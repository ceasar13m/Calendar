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

         let clickUp = () => {
            this.props.dataController.monthDecr();
        };

        let clickDown = () => {
            this.props.dataController.monthIncr();
        };

        return (
            <div className={s.month}>
                <div className={s.monhtName}>
                    <div className={s.up} onClick={clickUp}>

                    </div>
                    <div>
                        <h1 className={s.monthNameTitle}>{monthNames[this.props.dataController.getState().date.getMonth()]}</h1>
                    </div>
                    <div className={s.down} onClick={clickDown}>

                    </div>
                </div>
                <div className={s.year}>
                    <div className={s.up}>
                       Оскэ
                    </div>
                    <div>
                        <h1 className={s.yearTitle}>{this.props.dataController.getState().date.getFullYear()}</h1>
                    </div>
                    <div className={s.down}>
                        Аска
                    </div>
                </div>
            </div>
        )
    }
}

export default MonthName;