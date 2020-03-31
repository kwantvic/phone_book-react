import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { delContactAC } from '../../redux/create-reduce';

let mapStateToProps = (state) => {
    return {
        contacts: state.contactsPage.contacts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        delContact: (delContactId) => {
            dispatch(delContactAC(delContactId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);