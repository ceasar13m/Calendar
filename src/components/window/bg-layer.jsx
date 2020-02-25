import React, {Component} from "react";
import s from "./bg-layer.module.css"


class BackGroundLayer extends Component {

    render() {
        return (
            <div
                id={'bgLayerId'}
                className={s.bgLayer}
                onClick={()=> {
                    let thisWindow = document.getElementById('window');
                    thisWindow.style.display = 'none';

                    let bgLayerId = document.getElementById('bgLayerId');
                    bgLayerId.style.display = 'none';
                }}>

            </div>
        );
    }

}


export default BackGroundLayer;