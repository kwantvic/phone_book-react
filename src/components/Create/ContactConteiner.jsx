import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { delContactAC } from '../../redux/editingContacts-reduce';

let mapStateToProps = (state) => {
    return {
        editingContactsPage: state.editingContactsPage
        // editingContactsPage: state.contactsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        delContact: (delContact) => {
            dispatch(delContactAC(delContact))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);