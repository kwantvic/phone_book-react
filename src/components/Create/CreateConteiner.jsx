import React from 'react';
import Create from "./Create";
import { updateNewContactNameAC, sendContactAC, updateNewContactNumberAC, updateNewContactMailAC, generateNewContactIdAC, updateSearchContactAC } from '../../redux/create-reduce';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    contactsPage: state.contactsPage

});

const mapDispatchToProps = dispatch => ({
    generateContactId: newContactId => dispatch(generateNewContactIdAC(newContactId)),
    updateNewContactName: name => dispatch(updateNewContactNameAC(name)),
    ateNewContactNumber: number => dispatch(updateNewContactNumberAC(number)),
    updateNewContactMail: mail => dispatch(updateNewContactMailAC(mail)),
    sendContact: () => dispatch(sendContactAC()),
    updateSearchContact: textSearch => dispatch(updateSearchContactAC(textSearch))        
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);