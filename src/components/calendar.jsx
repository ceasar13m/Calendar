import React, {Component} from "react";


class Calendar extends Component {
    render() {

        function createCalendar(year, month) {
            let mon = month - 1;
            let date = new Date(year, mon);

            const list = [];

            list.push(
                <div className="board-row">
                    <div>Пн</div>
                    <div>Вт</div>
                    <div>Ср</div>
                    <div>Чт</div>
                    <div>Пт</div>
                    <div>Сб</div>
                    <div>Вс</div>
                </div>
            );

            let temp = [];

            for (let i = 0; i < getDay(date); i++) {
                temp.push(<div>-</div>);
            }


            while (date.getMonth() == mon) {
                temp.push(<div>date.getDate()<div>);
                if (getDay(date) % 7 == 6) {
                    list.push(<div className="board-row">temp</div>);
                }
                        date.setDate(date.getDate() + 1);
            }


             if (getDay(date) != 0) {
                 for (let i = getDay(date); i < 7; i++) {

                  }
                }

                        return list;

                        }

                        function getDay(date) {
                            let day = date.getDay();
                            if (day == 0)
                            day = 7;
                            return day - 1;
                        }

                        return ( createCalendar(2020, 2) );
                        }
                        }
                        }


                        export default Calendar;