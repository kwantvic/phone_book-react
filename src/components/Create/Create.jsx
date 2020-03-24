import React from 'react';
import style from './Create.module.css';
import Contact from './Contact';

const Create = (props) => {

    let state = props.contactsPage;

    let contactsElementName = state.contacts.map(c => <Contact nameContact={c.name}
        numberContact={c.number} mailContact={c.mail} key={c.number} />);

    let newContactBody = state.newContactBody;
    let newContactNumber = state.newContactNumber;
    let newContactMail = state.newContactMail;

    let onNewContactChange = (e) => {
        let body = e.target.value;
        props.updateNewContactBody(body);
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
        props.sendContact();
    };

    return (
        <div className={style.table}>
            <div className={style.input}>
                <div className={style.form}>
                    <div>
                        <input value={newContactBody}
                            onChange={onNewContactChange}
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