import React from 'react';
import style from './Contact.module.css';






const Contact = (props) => {
    let state = props.contactsPage;

    let onDellContactClick = (e) => {
        let btnOn = e.target;
        btnOn.classList.add("click");
        let btn1 = document.querySelector(".click");
        btnOn.classList.remove("click");
        let rowDelParent = btn1.parentElement.parentElement;
        let arr = {};
        arr.name = rowDelParent.childNodes[0].innerText;
        arr.number = rowDelParent.childNodes[1].innerText;
        arr.mail = rowDelParent.childNodes[2].innerText;
        props.delContact(arr);
    }

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
                <button className="del" onClick={onDellContactClick}>del</button>
                <button className="edit">edit</button>
            </div>
        </div>
    )
};

export default Contact;
