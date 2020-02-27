import React from 'react';

// props только1 - visible  или нет
export default class LoadingContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let style = this.props.loading ? {display:'block'} : {display:'none'};
       return (
           <div style={style}>
               Loading...
           </div>
       );
    }


}