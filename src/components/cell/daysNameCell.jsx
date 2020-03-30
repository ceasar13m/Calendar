import React, {Component} from "react";
import s from "./cell.module.css";

class DaysNameCell extends Component {
    render() {
            return (
                <div className={s.dateName}>
                    {this.props.value}
                </div>
            );
    }
}


export default DaysNameCell;