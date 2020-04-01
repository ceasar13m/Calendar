import React, {Component} from "react";
import s from "../cell/cell.module.css";


/**
 * Ячейка календаря с названием дня недели
 */
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