import React, {Component} from "react";
import "./index.css"
import BackGroundLoadingLayer from "./bgLayer";


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