import React, {Component} from "react";
import s from "./rightButton.module.css"


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
            <div className={s.rightButton}>
                <input type="button" value="Вперед" onClick={this.click}/>
            </div>
        )
    };
}


export default RightButton;