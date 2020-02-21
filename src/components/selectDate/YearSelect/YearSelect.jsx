import React, {Component} from "react";
import s from "./YearSelect.module.css"


class YearSelect extends Component {
    render() {

        let yearClickDown = () => {
            this.props.dataController.yearDecr();
        };

        let yearClickUp = () => {
            this.props.dataController.yearIncr();
        };


        return (
            <div className={s.year}>
                <div className={s.up} onClick={yearClickUp}>
                    next
                </div>

                <div>
                    <h1 className={s.yearTitle}>{this.props.dataController.getState().date.getFullYear()}</h1>
                </div>

                <div className={s.down} onClick={yearClickDown}>
                    previous
                </div>

            </div>
        )
    }
}

export default YearSelect;