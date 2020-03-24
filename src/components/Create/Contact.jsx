import React from 'react';
import style from './Contact.module.css';

let onDellContactClick = () => {
    alert("rewr");
}

const Contact = (props) => {
    return (
        <div className={style.create}>
            <div className={style.item}>
                {props.nameContact}
            </div>
            <div className={style.item}>
                {props.numberContact}
            </div>
            <div className={style.item}>
                {props.mailContact}
            </div>
            <div>
                <button onClick={onDellContactClick}>del</button>
            </div>
        </div>
    )
};

export default Contact;
