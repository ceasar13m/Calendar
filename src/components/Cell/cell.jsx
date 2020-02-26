import React from "react";
import s from "./cell.module.css";
import openModalWindow from "./dayButtonOnClick";

class Cell extends React.Component {
    render() {
        if(this.props.isToday){
            return (
                <button className={s.today} onClick={() => {openModalWindow(this.props.dataController)}}>
                    {this.props.value}
                </button>
            );
        } else if (this.props.dateName){
            return (
                <button className={s.dateName}>
                    {this.props.value}
                </button>
            );
        }else if(this.props.isWeekend) {
            return (
                <button className={s.weekend} onClick={() => {openModalWindow(this.props.dataController)}}>
                    {this.props.value}
                </button>
            );
        } else if (this.props.notButtonSquare){
            return (
                <button className={s.notButtonSquare}>
                    {this.props.value}
                </button>
            );
        } else {
            return (
                <button className={s.square} onClick={() => {openModalWindow(this.props.dataController)}}>
                    {this.props.value}
                </button>
            );
        }
    }
}


export default Cell;