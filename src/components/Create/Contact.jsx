import React, { useState } from 'react';
import style from './Contact.module.css';

const Contact = ({
    delContact,
    editContact,
    idContact,
    nameContact,
    numberContact,
    mailContact
}) => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(nameContact);
    const [number, setNumber] = useState(numberContact);
    const [mail, setMail] = useState(mailContact); 

    let mameControl, numberControl, mailControl;
    
    return (
        <div className={style.create}>
            <div ref={ref => mameControl = ref} className={style.item}>
                {!editMode ? name : (<input type="text" id="editName" value={name} onChange={e => setName(e.target.value)}></input>)}
            </div>
            <div ref={ref => numberControl = ref} className={style.item}>
                {!editMode ? number : (<input type="text" id="editNumber" value={number} onChange={e => setNumber(e.target.value)}></input>)}
            </div>
            <div ref={ref => mailControl = ref} className={style.item}>
                {!editMode ? mail : (<input type="text" id="editMail" value={mail} onChange={e => setMail(e.target.value)}></input>)}
            </div>
            <div>
                <button className={`${editMode ? style.hideButton : ''} del`} onClick={() => delContact(idContact)}>del</button>
                <button className={`${editMode ? style.hideButton : ''} edit`} onClick={() => setEditMode(true)}>edit</button>
                <button className={`${editMode ? '' : style.hideButton} okEdit`} onClick={() => {
                    editContact(idContact, name, number, mail);
                    setEditMode(false);
                }}>ok</button>
                <button className={`${editMode ? '' : style.hideButton} cancelEdit`} onClick={() => setEditMode(true)}>cancel</button>
            </div>
        </div>
    )
};

export default Contact;
