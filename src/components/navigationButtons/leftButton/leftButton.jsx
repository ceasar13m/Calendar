import React, {Component} from "react";
import s from "./leftButton.module.css"


class LeftButton extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    };

    click = () => {
        this.props.dataController.monthDecr();
    };

    render() {
        return (
            <div className={s.leftButton} onClick={this.click}>
                <p> &lt; </p>
            </div>
        )
    };
}


export default LeftButton;