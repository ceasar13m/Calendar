import React, {Component} from "react";
import s from "./cell.module.css";

class DaysNameCell extends Component {
    render() {
            return (
                <button className={s.dateName}>
                    {this.props.value}
                </button>
            );
    }
}


export default DaysNameCell;