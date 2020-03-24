import React from "react";
import s from "./cell.module.css";

class Cell extends React.Component {



    render() {

        let style = (this.props.eventCount !== 0) ? {display: 'block'} : {display: 'none'};
        if (this.props.isToday) {
            return (
                <button className={s.today}
                        onClick={() => {
                            this.props.dataController.showEventsWindow(this.props.date);
                        }}>
                    <div>
                        {this.props.date.getDate()}
                    </div>
                    <div className={s.Count} style={style}>
                        {this.props.eventCount}
                    </div>
                </button>
            );
        }  else if (this.props.isWeekend) {
            return (
                <button className={s.weekend}
                        onClick={() => {
                            this.props.dataController.showEventsWindow(this.props.date);
                        }}>
                    <div>
                        {this.props.date.getDate()}
                    </div>
                    <div className={s.Count} style={style}>
                        {this.props.eventCount}
                    </div>
                </button>
            );
        } else if (this.props.notButtonIsWeekend) {
            return (
                <button className={s.preWeekend}>
                    {this.props.value}
                </button>
            );
        } else if (this.props.notButtonSquare) {
            return (
                <button className={s.notButtonSquare}>
                    {this.props.value}
                </button>
            );
        } else {
            return (
                <button className={s.square}
                        onClick={() => {
                            this.props.dataController.showEventsWindow(this.props.date);
                        }}>
                    <div>
                        {this.props.date.getDate()}
                    </div>
                    <div className={s.Count} style={style}>
                        {this.props.eventCount}
                    </div>
                </button>
            );
        }
    }
}


export default Cell;