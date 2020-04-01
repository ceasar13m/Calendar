import React from "react";
import s from "./daysOfWeek.module.css"
import DaysNameCell from "./daysNameCell";


/**
 * Строка календаря с названиями дней недели
 */
class DaysOfTheWeek extends React.Component {
    render() {
        return (
            <div className={s.boardRow}>
                <DaysNameCell value="Mon"/>
                <DaysNameCell value="Tue"/>
                <DaysNameCell value="Wed"/>
                <DaysNameCell value="Thu"/>
                <DaysNameCell value="Fri"/>
                <DaysNameCell value="Sat"/>
                <DaysNameCell value="Sun"/>
            </div>
        );
    }
}

export default DaysOfTheWeek;