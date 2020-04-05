import React from 'react';
import style from './../Create/Create.module.css';
import MyPhoneBookContactConteiner from './MyPhoneBookContactConteiner';

const MyPhoneBook = (props) => {
    let state = props.myPhoneBookContactsPage;

    let contactsElementName = state.uiContacts.map(c => <MyPhoneBookContactConteiner store={props.myPhoneBookContactsPage} idContact={c.id} nameContact={c.name}
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

    let onSearchContactChange = (e) => {
        let textSearch = e.target.value;
        props.updateSearchContact(textSearch);
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
                    <button onClick={onSendContactClick}>ADD CONTACT</button>
                    <input className={style.inputSearch} onChange={onSearchContactChange} type="text" placeholder="search"></input>
                </div>
            </div>
            <div className={style.heading}>
                <div>Contact name</div>
                <div>Phone number</div>
                <div>Email</div>
            </div>
            <div className={style.content}>{contactsElementName}</div>
        </div>
    )
}

export default MyPhoneBook;