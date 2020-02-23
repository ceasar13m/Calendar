import React from "react";
import Cell from "../Square/cell";
import s from "./daysOfWeek.module.css"



class DaysOfTheWeek extends React.Component {

    render() {

        return (
            <div className={s.boardRow}>
                <Cell notButtonSquare={true} value="Mon"/>
                <Cell notButtonSquare={true} value="Tue"/>
                <Cell notButtonSquare={true} value="Wed"/>
                <Cell notButtonSquare={true} value="Thu"/>
                <Cell notButtonSquare={true} value="Fri"/>
                <Cell notButtonSquare={true} value="Sat"/>
                <Cell notButtonSquare={true} value="Sun"/>
            </div>
        );
    }
}

export default DaysOfTheWeek;