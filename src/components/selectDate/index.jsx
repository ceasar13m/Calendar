import React, {Component} from "react";
import s from "./Index.module.css"
import MonthSelect from "./MonthSelect";
import YearSelect from "./YearSelect";

/**
 * Изменение даты
 */
class DateSelect extends Component{

    render() {
        return (
            <div className={s.month}>
                <MonthSelect dataController={this.props.dataController} date={this.props.date}/>

                <YearSelect dataController={this.props.dataController} date={this.props.date}/>
            </div>
        )
    }
}

export default DateSelect;