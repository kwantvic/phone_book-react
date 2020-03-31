import React from 'react';
import style from './Contact.module.css';

const Contact = (props) => {

    let getTargetRow = (e) => {
        let btnOn = e.target;
        btnOn.classList.add("click");
        let btn1 = document.querySelector(".click");
        btnOn.classList.remove("click");
        return btn1;
    }

    let onDellContactClick = (e) => {
        let rowDelParent = getTargetRow(e).parentElement.parentElement;
        let delContactId = rowDelParent.childNodes[0].innerText;
        props.delContact(delContactId);
    }

    let onEditContactClick = (e) => {
        getTargetRow(e).parentElement.querySelector(".del").classList.add(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".edit").classList.add(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".okEdit").classList.remove(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".cancelEdit").classList.remove(`${style.hideButton}`);
        let rowEditParent = getTargetRow(e).parentElement.parentElement;
        let editName = rowEditParent.childNodes[1];
        let editNumber = rowEditParent.childNodes[2];
        let editMail = rowEditParent.childNodes[3];
        editName.innerHTML = `<input type="text" value="" id="editName">`;
        editNumber.innerHTML = `<input type="text" value="" id="editNumber">`;
        editMail.innerHTML = `<input type="text" value="" id="editMail">`;


    }

    return (
        <div className={style.create}>
            <div className={style.hideId}>
                {props.idContact}
            </div>
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
                <button className="edit" onClick={onEditContactClick}>edit</button>
                <button className={`${style.hideButton} okEdit`}>ok</button>
                <button className={`${style.hideButton} cancelEdit`}>cancel</button>
            </div>
        </div>
    )
};

export default Contact;
