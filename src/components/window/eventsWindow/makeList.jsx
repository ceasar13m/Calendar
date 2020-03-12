import React from "react";
import s from "./makeList.module.css";

class MakeList extends React.Component {
    render() {
        return (
            <ul>

                {/*{this.props.items.map(event => (*/}
                {/*    <li>*/}
                {/*        <div className={s.liList}>*/}
                {/*            <div className={s.liItem}>{event? event: null}*/}
                {/*                <hr/>*/}
                {/*            </div>*/}
                {/*            <button className={s.dellButton}>X</button>*/}
                {/*        </div>*/}
                {/*    </li>*/}

                {/*))}*/}

                {this.props.events.map(item => (
                    <li key={item.id}>


                        <div className={s.liList}>
                            <div className={s.liItem}>{item.description}
                                <hr/>
                            </div>
                            <button className={s.dellButton}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default MakeList;