import React from "react";
import s from "./cell.module.css";
import openModalWindow from "./dayButtonOnClick";

class Cell extends React.Component {
    render() {
        if (this.props.isToday) {
            debugger
            return (
                <button className={s.today} onClick={() => {
                    openModalWindow(this.props.dataController)
                }}>
                    {this.props.date.getDate()}
                </button>
            );
        } else if (this.props.dateName) {
            return (
                <button className={s.dateName}>
                    {this.props.value}
                </button>
            );
        } else if (this.props.isWeekend) {
            return (
                <button className={s.weekend} onClick={() => {
                    this.props.dataController.showWindow(this.props.date);
                }}>
                    {this.props.date.getDate()}
                </button>
            );
        } else if (this.props.notButtonIsWeekend) {
            return (
                <button className={s.preWeekend}>
                    {this.props.value}
                </button>
            );
        } else if (this.props.notButtonSquare) {
            return (
                <button className={s.notButtonSquare}>
                    {this.props.value}
                </button>
            );
        } else {
            return (
                <button className={s.square} onClick={() => {
                    this.props.dataController.showWindow(this.props.date);
                }}>
                    {this.props.date.getDate()}
                </button>
            );
        }
    }
}


export default Cell;