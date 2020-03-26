import store from "./redux-store";

const DELL_CONTACT = 'DELL_CONTACT';

let initialState = {
    contacts: store.contacts
};

const editingContacts = (state = initialState, action) => {
    switch (action.type) {
        case DELL_CONTACT:
            debugger
            let delContact = action.delContact;
            return {
                ...state,
                contacts: [...state.contacts.splice(state.contacts.indexOf(delContact), 1)]
            }
        default:
            return state;
    }
};

export const delContactAC = (delContact) => ({ type: DELL_CONTACT, delContact: delContact });

export default editingContacts;