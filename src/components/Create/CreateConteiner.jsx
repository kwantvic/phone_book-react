import React from 'react';
import Create from "./Create";
import { updateNewContactBodyAC, sendContactAC } from '../../redux/create-reduce';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        contactsPage: state.contactsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewContactBody: (body) => {
            dispatch(updateNewContactBodyAC(body))
        },
        sendContact: () => {
            dispatch(sendContactAC())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);