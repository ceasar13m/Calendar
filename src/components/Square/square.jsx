import React from "react";
import s from "./square.module.css";
import Modal from 'react-modal'


function Square(props){
    let subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div className={s.square}>
            <button onClick={openModal}>{props.value}</button>
            <Modal className={s.modal}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal">

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input value='Сюда будем текст вводить'/>
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}


export default Square;