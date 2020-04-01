import React from "react";
import s from "./make-list.module.css";

/**
 * Вывод событий
 */
class MakeList extends React.Component {

    render() {
        let events = [];
        for (let [key, value] of this.props.events) {
            events.push(value);
        }
        return (
            <ul>
                {events.map(item => (
                    <li key={item.id}>
                        <div className={s.liList}>
                            <div className={s.liItem}>{item.description}
                                <hr/>
                            </div>
                            <button className={s.dellButton}
                                    onClick={()=> this.props.dataController.deleteEvent(item)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default MakeList;