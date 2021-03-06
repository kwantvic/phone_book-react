import React from 'react';
import style from './Create.module.css';
import ContactConteiner from './ContactConteiner';

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const Create = (props) => {
    const state = props.contactsPage;
    const { newContactName, newContactNumber, newContactMail } = state;

    return (
        <div className={style.table}>
            <div className={style.input}>
                <div className={style.form}>
                    <div>
                        <input
                            name="name"
                            value={newContactName}
                            onChange={e => props.updateNewContactName(e.target.value)}
                            placeholder="contact name">
                        </input>
                    </div>
                    <div>
                        <input
                            name="number"
                            value={newContactNumber}
                            onChange={e => props.updateNewContactNumber(e.target.value)}
                            placeholder="phone number">
                        </input>
                    </div>
                    <div>
                        <input
                            name="email"
                            value={newContactMail}
                            onChange={e => props.updateNewContactMail(e.target.value)}
                            placeholder="email">
                        </input>
                    </div>
                    <button
                        onClick={() => {
                            props.generateContactId(uuidv4());
                            props.sendContact();
                        }}>
                        ADD CONTACT
                    </button>
                    <input
                        className={style.inputSearch}
                        onChange={e => props.updateSearchContact(e.target.value)}
                        type="text" placeholder="search">
                    </input>
                </div>
            </div>
            <div className={style.heading}>
                <div>Contact name</div>
                <div>Phone number</div>
                <div>Email</div>
            </div>
            <div className={style.content}>{state.uiContacts.map(c =>
                <ContactConteiner
                    store={props.contactsPage}
                    idContact={c.id}
                    nameContact={c.name}
                    numberContact={c.number}
                    mailContact={c.mail}
                    key={c.id} />)}
            </div>
        </div>
    )
}

export default Create;