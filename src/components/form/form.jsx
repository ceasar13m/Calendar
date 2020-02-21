import React, {Component} from "react";
import s from "./form.module.css"


class Form extends Component {

    render() {
        return (
            <div className={s.promptFormContainer}>
                <form className={s.promptForm}>

                    <div className={s.promptMessage}>Введите что-нибудь...
                        <br/>Пожалуйста..
                    </div>

                    <input name="text" type="text"/>
                    <input type="submit" value="Ok"/>
                    <input type="button" name="cancel" value="Отмена"/>
                </form>
            </div>
        );
    }

}


export default Form;