import React from "react";
import s from "./square.module.css";

class Square extends React.Component {
    render() {
        return (
            <button className={s.square}>
                {this.props.value}
            </button>
        );
    }
}


export default Square;