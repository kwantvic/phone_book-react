import React from 'react';
import Create from "./Create";
import { updateNewContactBodyAC, sendContactAC, updateNewContactNumberAC, updateNewContactMailAC, dellContactAC } from '../../redux/create-reduce';
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
        updateNewContactNumber: (number) => {
            dispatch(updateNewContactNumberAC(number))
        },
        updateNewContactMail: (mail) => {
            dispatch(updateNewContactMailAC(mail))
        },
        sendContact: () => {
            dispatch(sendContactAC())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);