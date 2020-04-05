import React from 'react';
import { updateNewContactNameAC, sendContactAC, updateNewContactNumberAC, updateNewContactMailAC, generateNewContactIdAC, updateSearchContactAC } from '../../redux/myPhoneBook-reduce';
import { connect } from 'react-redux';
import MyPhoneBook from './MyPhoneBook';

let mapStateToProps = (state) => {
    return {        
        myPhoneBookContactsPage: state.myPhoneBookContactsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        generateContactId: (newContactId) => {
            dispatch(generateNewContactIdAC(newContactId))
        },
        updateNewContactName: (name) => {
            dispatch(updateNewContactNameAC(name))
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
        updateSearchContact: (textSearch) => {
            dispatch(updateSearchContactAC(textSearch))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPhoneBook);