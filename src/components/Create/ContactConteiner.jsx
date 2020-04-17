import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { delContactAC, editContactAC } from '../../redux/create-reduce';

let mapStateToProps = state => ({
    contactsPage: state.contactsPage
});

let mapDispatchToProps = dispatch => ({
    delContact: delContactId => dispatch(delContactAC(delContactId)),
    editContact: (editId, editNewName, editNewNumber, editNewMail) =>
        dispatch(editContactAC(editId, editNewName, editNewNumber, editNewMail))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);