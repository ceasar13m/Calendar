import React from "react";
import Square from "../Square/square";
import s from "./daysOfWeek.module.css"



class DaysOfTheWeek extends React.Component {

    render() {

        return (
            <div className={s.boardRow}>
                <Square value="Пн"/>
                <Square value="Вт"/>
                <Square value="Ср"/>
                <Square value="Чт"/>
                <Square value="Пт"/>
                <Square value="Сб"/>
                <Square value="Вс"/>
            </div>
        );
    }
}

export default DaysOfTheWeek;