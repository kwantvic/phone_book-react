import React from 'react';
import { connect } from 'react-redux';
import Contact from './../Create/Contact';
import { delContactAC, editContactAC } from '../../redux/myPhoneBook-reduce';

const mapStateToProps = (state) => ({
    contactsPage: state.contactsPage
});

const mapDispatchToProps = (dispatch) => ({
    delContact: (delContactId) => dispatch(delContactAC(delContactId)),
    editContact: (editId, editNewName, editNewNumber, editNewMail) => dispatch(
        editContactAC(editId, editNewName, editNewNumber, editNewMail)
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);