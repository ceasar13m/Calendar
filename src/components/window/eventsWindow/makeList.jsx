import React from "react";
import s from "./makeList.module.css";

class MakeList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        <div className={s.liList}>
                            <div className={s.liItem}>{item.text}<hr /></div>
                            <button className={s.dellButton}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default MakeList;