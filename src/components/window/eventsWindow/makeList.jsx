import React from "react";
import s from "./events-winow.module.css";

class MakeList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text} <button className={s.delButton}>X</button></li>

                ))}
            </ul>
        );
    }
}

export default MakeList;