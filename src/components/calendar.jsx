import React, {Component} from "react";
import Cell from "./cell";
import DaysOfTheWeek from "./daysOfWeek";


/**
 * Компонент возвращает таблицу календаря
 * В пропсах получает год и месяц
 */

class Calendar extends Component {

    createCalendar(d) {
        let date = new Date(d.getFullYear(), d.getMonth());
        let month = date.getMonth();
        const weeks = []; //Весь месяц
        let week = []; //Одна неделя
        //Первая строка таблицы календаря - названия дней недели
        weeks.push(
            <DaysOfTheWeek/>
        );
        weeks.push(this.drawPreviousMonthDays(date));
        //Создает недели и добавляем в массив месяца
        while (date.getMonth() === month) {
            let tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            let today = new Date();
            let eventCount = 0;
            for (let count of this.props.counts) {
                if (count.date.getDate() === date.getDate() &&
                    count.date.getMonth() === date.getMonth() &&
                    count.date.getFullYear() === date.getFullYear()) {
                    eventCount = count.count;
                }
            }
            if (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()) {
                week.push(<Cell eventCount={eventCount}
                                dataController={this.props.dataController}
                                date={tempDate}
                                isToday={true}
                                value={date.getDate()}/>);
            } else if (date.getDay() === 6 || date.getDay() === 0) {
                week.push(<Cell eventCount={eventCount}
                                dataController={this.props.dataController}
                                date={tempDate}
                                isWeekend={true}
                                value={date.getDate()}/>);
            } else {
                week.push(<Cell eventCount={eventCount}
                                dataController={this.props.dataController}
                                date={tempDate}
                                value={date.getDate()}/>);
            }
            if (Calendar.getWeekDay(date) % 7 === 6) {
                weeks.push(<div className="board-row">{week}</div>);
                week = [];
            }
            date.setDate(date.getDate() + 1);
        }
        week.push(this.drawNextMonthDays(date));
        weeks.push(<div className="board-row">{week}</div>);
        return weeks;
    }

    drawPreviousMonthDays(date) {
        let days = [];
        let previousMonthDate = Calendar.getPreviousMonthLastDay(date);
        for (let i = previousMonthDate.getDate() - Calendar.getWeekDay(previousMonthDate); i <= previousMonthDate.getDate(); i++) {
            if (previousMonthDate.getDay() === 0)
                break;
            if (days.length === 5 || days.length === 6) {
                days.push(<Cell date={date}
                                dataController={this.props.dataController}
                                notButtonIsWeekend={true}
                                value={i}/>);
            } else
                days.push(<Cell date={date}
                                notButtonSquare={true}
                                value={i}/>);
        }
        return days;
    }

    drawNextMonthDays(date) {
        let days = [];
        let nextMonthDate = new Date(date.getFullYear(), date.getMonth());
        //Заполняет  таблицу до конца
        if (Calendar.getWeekDay(date) !== 0) {
            for (let i = Calendar.getWeekDay(nextMonthDate); i < 7; i++) {
                if (i === 5 || i === 6) {
                    days.push(<Cell notButtonIsWeekend={true}
                                    value={nextMonthDate.getDate()}/>);
                } else {
                    days.push(<Cell notButtonSquare={true}
                                    value={nextMonthDate.getDate()}/>);
                }
                nextMonthDate.setDate(nextMonthDate.getDate() + 1);
            }
        }

        return days;
    }

    static getPreviousMonthLastDay(date) {
        return new Date(date.getFullYear(), date.getMonth(), 0);
    }

    static getWeekDay (date) {
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