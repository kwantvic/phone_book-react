import React from 'react';
import style from './Contact.module.css';

const Contact = (
    props
    ) => {
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
        let editId = rowEditParent.childNodes[0].innerText;
        let editName = rowEditParent.childNodes[1];
        let editNumber = rowEditParent.childNodes[2];
        let editMail = rowEditParent.childNodes[3];
        let getEditContact = [props.store.uiContacts.filter(
            n => n.id == editId
        )];
        editName.innerHTML = `<input type="text" id="editName"
        value=${getEditContact[0][0].name}>`;
        editNumber.innerHTML = `<input type="text" id="editNumber"
        value=${getEditContact[0][0].number}>`;
        editMail.innerHTML = `<input type="text" id="editMail" 
        value=${getEditContact[0][0].mail}>`;
    }

    let onEditOkContactClick = (e) => {
        getTargetRow(e).parentElement.querySelector(".del").classList.remove(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".edit").classList.remove(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".okEdit").classList.add(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".cancelEdit").classList.add(`${style.hideButton}`);
        let rowEditParent = getTargetRow(e).parentElement.parentElement;
        props.editContact(rowEditParent.childNodes[0].innerText, document.getElementById("editName").value, document.getElementById("editNumber").value, document.getElementById("editMail").value);
        let getEditContact = [props.store.uiContacts.filter(
            n => n.id == rowEditParent.childNodes[0].innerText
        )];
        rowEditParent.childNodes[1].innerHTML = `${getEditContact[0][0].name}`;
        rowEditParent.childNodes[2].innerHTML = `${getEditContact[0][0].number}`;
        rowEditParent.childNodes[3].innerHTML = `${getEditContact[0][0].mail}`;
    }

    let onEditCancelContactClick = (e) => {
        let rowEditParent = getTargetRow(e).parentElement.parentElement;
        let getEditContact = [props.store.uiContacts.filter(
            n => n.id == rowEditParent.childNodes[0].innerText
        )];
        rowEditParent.childNodes[0].innerHTML = `${rowEditParent.childNodes[0].innerText}`;
        rowEditParent.childNodes[1].innerHTML = `${getEditContact[0][0].name}`;
        rowEditParent.childNodes[2].innerHTML = `${getEditContact[0][0].number}`;
        rowEditParent.childNodes[3].innerHTML = `${getEditContact[0][0].mail}`;
        getTargetRow(e).parentElement.querySelector(".del").classList.remove(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".edit").classList.remove(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".okEdit").classList.add(`${style.hideButton}`);
        getTargetRow(e).parentElement.querySelector(".cancelEdit").classList.add(`${style.hideButton}`);
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
                <button className={`${style.hideButton} okEdit`} onClick={onEditOkContactClick}>ok</button>
                <button className={`${style.hideButton} cancelEdit`} onClick={onEditCancelContactClick}>cancel</button>
            </div>
        </div>
    )
};

export default Contact;
