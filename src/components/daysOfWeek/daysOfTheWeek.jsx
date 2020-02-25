import React from "react";
import Cell from "../Cell/cell";
import s from "./daysOfWeek.module.css"



class DaysOfTheWeek extends React.Component {

    render() {

        return (
            <div className={s.boardRow}>
                <Cell dateName={true} value="Mon"/>
                <Cell dateName={true} value="Tue"/>
                <Cell dateName={true} value="Wed"/>
                <Cell dateName={true} value="Thu"/>
                <Cell dateName={true} value="Fri"/>
                <Cell dateName={true} value="Sat"/>
                <Cell dateName={true} value="Sun"/>
            </div>
        );
    }
}

export default DaysOfTheWeek;