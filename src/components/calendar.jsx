import React, {Component} from "react";
import Square from "./Square/square";


class Calendar extends Component {
    createCalendar = (year, month) => {
        let mon = month - 1;
        let date = new Date(year, mon);

        const list = [];

        list.push(
            <div className="board-row">
                <Square value="Пн"/>
                <Square value="Вт"/>
                <Square value="Ср"/>
                <Square value="Чт"/>
                <Square value="Пт"/>
                <Square value="Сб"/>
                <Square value="Вс"/>
            </div>
        );

        let temp = [];

        for (let i = 0; i < this.getDay(date); i++) {
            temp.push(<Square value=" "/>);
        }


        while (date.getMonth() === mon) {
            temp.push(<Square value={date.getDate()}/>);
            if (this.getDay(date) % 7 === 6) {
                list.push(<div className="board-row">{temp}</div>);
                temp = [];
            }

            date.setDate(date.getDate() + 1);
        }

        list.push(<div className="board-row">{temp}</div>);

        if (this.getDay(date) !== 0) {
            for (let i = this.getDay(date); i < 7; i++) {
                temp.push(<Square value=" "/>);
            }
        }

        return list;

    }

    getDay = (date) => {
        let day = date.getDay();
        if (day === 0)
            day = 7;
        return day - 1;
    }


    render() {
        return (this.createCalendar(1991, 3));
    }

}


export default Calendar;