import React, {Component} from "react";
import s from "./index.module.css"

/**
 * Год и кнопки изменения года
 */
class YearSelect extends Component {

    render() {

        let preYear = this.props.date.getFullYear() - 1;
        let year = this.props.date.getFullYear();
        let nextYear = this.props.date.getFullYear() + 1;

        return (
            <div className={s.year}>
                <div className={s.up} onClick={() => {this.props.dataController.yearDecr();}}>
                    {preYear}
                </div>

                <div>
                    <h1 className={s.yearTitle}>{year}</h1>
                </div>

                <div className={s.down} onClick={() => {this.props.dataController.yearIncr();}}>
                    {nextYear}
                </div>

            </div>
        )
    }
}

export default YearSelect;