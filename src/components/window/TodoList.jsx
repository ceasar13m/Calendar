import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div key={item.id}> {item.text}</div>
                ))}
            </div>
        );
    }
}

export default TodoList;