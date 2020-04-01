import React, {Component} from "react";
import "./load-layer.css"
import BackGroundLoadingLayer from "./bgLayer/bg-layer";

/**
 * Анимация загрузки
 */
class LoadLayer extends Component {

    render() {
        return (
            <div style={this.props.loadings ? {display: 'block'} : {display: 'none'}} >
                <BackGroundLoadingLayer/>
                <div className="cssload-loader">
                    <div className="cssload-inner cssload-one"></div>
                    <div className="cssload-inner cssload-two"></div>
                    <div className="cssload-inner cssload-three"></div>
                </div>
            </div>
        );
    }
}

export default LoadLayer;