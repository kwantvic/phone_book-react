import React from 'react';
import style from './Create.module.css';
import ContactConteiner from './ContactConteiner';

const Create = (props) => {

    let state = props.contactsPage;

    let contactsElementName = state.contacts.map(c => <ContactConteiner store={props.store} idContact={c.id} nameContact={c.name}
        numberContact={c.number} mailContact={c.mail} key={c.id} />);

    let newContactName = state.newContactName;
    let newContactNumber = state.newContactNumber;
    let newContactMail = state.newContactMail;

    let onNewNameChange = (e) => {
        let name = e.target.value;
        props.updateNewContactName(name);
    };
    let onNewNumberChange = (e) => {
        let number = e.target.value;
        props.updateNewContactNumber(number);
    };
    let onNewMailChange = (e) => {
        let mail = e.target.value;
        props.updateNewContactMail(mail);
    };

    let onSendContactClick = () => {
        function uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
        let newContactId = uuidv4();
        props.generateContactId(newContactId);
        props.sendContact();
    };

    return (
        <div className={style.table}>
            <div className={style.input}>
                <div className={style.form}>
                    <div>
                        <input value={newContactName}
                            onChange={onNewNameChange}
                            placeholder="contact name">
                        </input>
                    </div>
                    <div>
                        <input value={newContactNumber}
                            onChange={onNewNumberChange}
                            placeholder="phone number">
                        </input>
                    </div>
                    <div>
                        <input value={newContactMail}
                            onChange={onNewMailChange}
                            placeholder="email">
                        </input>
                    </div>
                    <button onClick={onSendContactClick}>add contact</button>
                </div>
            </div>
            <div className={style.heading}>
                <div><h4>contact name</h4></div>
                <div><h4>phone number</h4></div>
                <div><h4>email</h4></div>
            </div>
            <div className={style.content}>{contactsElementName}</div>
        </div>
    )
}

export default Create;