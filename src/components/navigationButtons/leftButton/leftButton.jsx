import React, {Component} from "react";
import s from "./leftButton.module.css"


class LeftButton extends Component{
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {

    }


    render() {
        return (
            <div className={s.leftButton}>

                <input type="button" value="Назад" onClick={this.click}/>

            </div>
        )
    }
}


export default LeftButton;