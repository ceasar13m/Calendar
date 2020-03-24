import React, {Component} from "react";
import s from "./YearSelect.module.css"


class YearSelect extends Component {

    render() {

        let yearClickDown = () => {
            this.props.dataController.yearIncr();
        };

        let yearClickUp = () => {
            this.props.dataController.yearDecr();
        };


        return (
            <div className={s.year}>
                <div className={s.up} onClick={yearClickUp}>
                    previous
                </div>

                <div>
                    <h1 className={s.yearTitle}>{this.props.date.getFullYear()}</h1>
                </div>

                <div className={s.down} onClick={yearClickDown}>
                    next
                </div>

            </div>
        )
    }
}

export default YearSelect;