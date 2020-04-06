import React from 'react';
import { updateNewContactNameAC, sendContactAC, updateNewContactNumberAC, updateNewContactMailAC, generateNewContactIdAC, updateSearchContactAC } from '../../redux/myPhoneBook-reduce';
import { connect } from 'react-redux';
import MyPhoneBook from './MyPhoneBook';

// typo in file name - should it de `Container`?

const mapStateToProps = state => ({
    myPhoneBookContactsPage: state.myPhoneBookContactsPage
});

const mapDispatchToProps = dispatch => ({
    generateContactId: newContactId => dispatch(generateNewContactIdAC(newContactId)),
    updateNewContactName: name => dispatch(updateNewContactNameAC(name)),
    updateNewContactNumber: number => dispatch(updateNewContactNumberAC(number)),
    updateNewContactMail: mail => dispatch(updateNewContactMailAC(mail)),
    sendContact: () => dispatch(sendContactAC()),
    updateSearchContact: textSearch => dispatch(updateSearchContactAC(textSearch)),
});

// pls, setup lint for this project

export default connect(mapStateToProps, mapDispatchToProps)(MyPhoneBook);