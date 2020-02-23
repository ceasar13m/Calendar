import React, {Component} from "react";
import Cell from "./Square/cell";
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



        let previousMonthDate = new Date(date.getFullYear(), date.getMonth(), 0);
        let a = previousMonthDate.getDate();
        let b = this.getDay(previousMonthDate);
        //Заполняем таблицу до начала месяца
        for (let i = previousMonthDate.getDate() - this.getDay(previousMonthDate); i <= previousMonthDate.getDate(); i++) {
            debugger;
            week.push(<Cell notButtonSquare={true} value={i}/>);
        }


        //Создает недели и добавляем в массив месяца
        while (date.getMonth() === mon) {
            let today = new Date();
            if (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()) {
                week.push(<Cell isToday={true} value={date.getDate()}/>);
            }
            else if(date.getDay() === 6 || date.getDay() === 0) {
                week.push(<Cell isWeekend = {true} value={date.getDate()}/>);
            } else {
                week.push(<Cell value={date.getDate()}/>);
            }

            if (this.getDay(date) % 7 === 6) {
                weeks.push(<div className="board-row">{week}</div>);
                week = [];
            }

            date.setDate(date.getDate() + 1);
        }



        let nextMonthDate = new Date(date.getFullYear(), date.getMonth());
        //Заполняет  таблицу до конца строки пустыми ячейками
        if (this.getDay(date) !== 0) {
            for (let i = this.getDay(nextMonthDate); i < 7; i++) {
                week.push(<Cell value={nextMonthDate.getDate()}/>);
                nextMonthDate.setDate(nextMonthDate.getDate() + 1);
            }
        }

        weeks.push(<div className="board-row">{week}</div>);

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