import React from "react";
import s from "./cell.module.css";

/**
 * Ячейка календаря
 */

class Cell extends React.Component {
    render() {
        let style = (this.props.eventCount !== 0) ? {display: 'block'} : {display: 'none'};
        if (this.props.isToday) {
            return (
                <div className={s.today}
                        onClick={() => {
                            this.props.dataController.showEventsWindow(this.props.date);
                        }}>
                    <div className={s.day}>{this.props.date.getDate()}</div>
                    <div className={s.count} style={style}>{this.props.eventCount}</div>
                </div>
            );
        }  else if (this.props.isWeekend) {
            return (
                <div className={s.weekend}
                        onClick={() => {
                            this.props.dataController.showEventsWindow(this.props.date);
                        }}>
                    <div className={s.day}>{this.props.date.getDate()}</div>
                    <div className={s.count} style={style}>{this.props.eventCount}</div>
                </div>
            );
        } else if (this.props.notButtonIsWeekend) {
            return (
                <div className={s.preWeekend}>{this.props.value}</div>
            );
        } else if (this.props.notButtonSquare) {
            return (
                <div className={s.notButtonSquare}>{this.props.value}</div>
            );
        } else {
            return (
                <div className={s.square}
                        onClick={() => {
                            this.props.dataController.showEventsWindow(this.props.date);
                        }}>
                    <div className={s.day}>{this.props.date.getDate()}</div>
                    <div className={s.count} style={style}>{this.props.eventCount}</div>
                </div>
            );
        }
    }
}

export default Cell;