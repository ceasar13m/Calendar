import React, {Component} from "react";
import Cell from "../components/cell/cell";
import DaysOfTheWeek from "../components/daysOfWeek/daysOfTheWeek";


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
        for (let i = previousMonthDate.getDate() - this.getDay(previousMonthDate); i <= previousMonthDate.getDate(); i++) {
            if (previousMonthDate.getDay() === 0)
                break;


            if (week.length === 5 || week.length === 6) {
                week.push(<Cell date={date} dataController={this.props.dataController} notButtonIsWeekend={true} value={i}/>);
            } else
                week.push(<Cell date={date} notButtonSquare={true} value={i}/>);
        }


        //Создает недели и добавляем в массив месяца
        while (date.getMonth() === mon) {

            let tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            let today = new Date();


            if (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()) {
                week.push(<Cell dataController={this.props.dataController}
                                date={tempDate}
                                isToday={true}
                                value={date.getDate()}/>);

            } else if (date.getDay() === 6 || date.getDay() === 0) {
                week.push(<Cell dataController={this.props.dataController}
                                date={tempDate}
                                isWeekend={true}
                                value={date.getDate()}/>);
            } else {
                week.push(<Cell dataController={this.props.dataController}
                                date={tempDate}
                                value={date.getDate()}/>);
            }

            if (this.getDay(date) % 7 === 6) {
                weeks.push(<div className="board-row">{week}</div>);
                week = [];
            }

            date.setDate(date.getDate() + 1);
        }


        let nextMonthDate = new Date(date.getFullYear(), date.getMonth());
        //Заполняет  таблицу до конца
        if (this.getDay(date) !== 0) {
            for (let i = this.getDay(nextMonthDate); i < 7; i++) {
                if (i === 5 || i === 6) {
                    week.push(<Cell date = {date} notButtonIsWeekend={true} value={nextMonthDate.getDate()}/>);
                } else {
                    week.push(<Cell date = {date} notButtonSquare={true} value={nextMonthDate.getDate()}/>);
                }
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