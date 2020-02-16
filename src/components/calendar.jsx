import React, {Component} from "react";


class Calendar extends Component {
    render() {
        function createCalendar(year, month) {
            let mon = month - 1;
            let date = new Date(year, mon);

            let table = '<table> ' +
                '<tr> ' +
                '<th> пн </th>' +
                '<th> вт </th>' +
                '<th> ср </th>' +
                '<th> чт </th>' +
                '<th> пт </th>' +
                '<th> сб </th>' +
                '<th> вс </th>' +
                '</tr>' +
                '<tr>';


            for (let i = 0; i < getDay(date); i++) {
                table += '<td></td>';
            }

            while (date.getMonth() == mon) {
                table += '<td>' + date.getDate() + '</td>';
                if (getDay(date) % 7 == 6) { // вс, последний день - перевод строки
                    table += '</tr><tr>';
                }
                date.setDate(date.getDate() + 1);
            }

            if (getDay(date) != 0) {
                for (let i = getDay(date); i < 7; i++) {
                    table += '<td></td>';
                }
            }

            table += '</tr></table>';

            return table;

        }

        function getDay(date) {
            let day = date.getDay();
            if (day == 0) day = 7;
            return day - 1;
        }



        return (
            createCalendar(2012, 9)
        );
    }
}

export default Calendar;
