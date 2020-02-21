import React, {Component} from "react";
import Square from "./Square/square";
import DaysOfTheWeek from "./Table/daysOfTheWeek";


/**
 * Компанента возвращает таблицу календаря
 * В пропсах получает год и месяц
 */

class Calendar extends Component {

    createCalendar = (d) => {
        let date = new Date(d.getFullYear(), d.getMonth());
        let mon = date.getMonth();
        const weeks = []; //Весь месяц

        //Первая строка таблицы календаря - названия дней недели
        weeks.push(
            <DaysOfTheWeek/>
        );

        let week = []; //Одна неделя


        //Заполняем таблицу до начала месяца
        for (let i = 0; i < this.getDay(date); i++) {
            week.push(<Square isToday={false} value=" "/>);
        }


        //Создает недели и добавляем в массив месяца
        while (date.getMonth() === mon) {
            let today = new Date();
            if (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()) {
                week.push(<Square isToday={true} value={date.getDate()}/>);
            }
            else if(date.getDay() === 6 || date.getDay() === 0) {
                debugger;
                week.push(<Square isWeekend = {true} value={date.getDate()}/>);
            } else {
                debugger;
                week.push(<Square value={date.getDate()}/>);
            }

            if (this.getDay(date) % 7 === 6) {
                debugger;
                weeks.push(<div className="board-row">{week}</div>);
                week = [];
            }

            date.setDate(date.getDate() + 1);
        }

        weeks.push(<div className="board-row">{week}</div>);

        //Заполняет  таблицу до конца строки пустыми ячейками
        if (this.getDay(date) !== 0) {
            for (let i = this.getDay(date); i < 7; i++) {
                week.push(<Square value=" "/>);
            }
        }

        return weeks;

    }


    getDay = (date) => {
        let day = date.getDay();
        if (day === 0)
            day = 7;
        return day - 1;
    }


    render() {
        return (this.createCalendar(this.props.date));
    }

}


export default Calendar;