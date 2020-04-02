import React, {Component} from "react";
import s from "./index.module.css"


/**
 * Кнопка выбора следующего месяца
 */
class RightButton extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    };

    click = () => {
        this.props.dataController.monthIncr();
    };

    render() {
        return (
            <div className={s.rightButton} onClick={this.click} >
                <p>
                     >
                </p>

            </div>
        )
    };
}


export default RightButton;