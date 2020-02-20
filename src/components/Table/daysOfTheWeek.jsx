import React from "react";
import Square from "../Square/square";
import s from "./daysOfWeek.module.css"



class DaysOfTheWeek extends React.Component {

    render() {

        return (
            <div className={s.boardRow}>
                <Square isButton={false} value="Mon"/>
                <Square isButton={false} value="Tue"/>
                <Square isButton={false} value="Wed"/>
                <Square isButton={false} value="Thu"/>
                <Square isButton={false} value="Fri"/>
                <Square isButton={false} value="Sat"/>
                <Square isButton={false} value="Sun"/>
            </div>
        );
    }
}

export default DaysOfTheWeek;