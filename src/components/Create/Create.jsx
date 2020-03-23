import React from 'react';
import style from './Create.module.css';
import Contact from './Contact';

const Create = (props) => {

    let state = props.contactsPage;

    let contactsElement = state.contacts.map(c => <Contact nameContact={c.name} key={c.id} />);

    let newContactBody = state.newContactBody;

    let onNewContactChange = (e) => {
        let body = e.target.value;
        props.updateNewContactBody(body);
    };

    let onSendContactClick = () => {
        props.sendContact();
    };

    return (
        <div className={style.table}>
            <div>
                <textarea value={newContactBody}
                    onChange={onNewContactChange}
                    placeholder="enter name"></textarea>
            </div>
            <div>
                <button onClick={onSendContactClick}>add name</button>
            </div>
            <div className={style.createContact}>
                <div>{contactsElement}</div>
            </div>


        </div>
    )
}

export default Create;