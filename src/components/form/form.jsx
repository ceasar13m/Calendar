import React, {Component} from "react";
import s from "./form.module.css"
import TodoApp from "./ListForm";


class Form extends Component {

    render() {
        return (
            <div className={s.promptFormContainer}>
                <form className={s.promptForm}>
                    <TodoApp />
                </form>
            </div>
        );
    }

}


export default Form;