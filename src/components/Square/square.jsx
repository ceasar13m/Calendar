import React from "react";
import s from "./square.module.css";

class Square extends React.Component {
    render() {
        if(this.props.isToday){
            return (
                <button className={s.today}>
                    {this.props.value}
                </button>
            );
        } if(this.props.isWeekend) {
            return (
                <button className={s.weekend}>
                    {this.props.value}
                </button>
            );
        } else {
            return (
                <button className={s.square}>
                    {this.props.value}
                </button>
            );
        }
    }
}


export default Square;