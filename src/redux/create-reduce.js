const GENERATE_NEW_CONTACT_ID = 'GENERATE_NEW_CONTACT_ID';
const UPDATE_NEW_CONTACT_NAME = 'UPDATE_NEW_CONTACT_NAME';
const UPDATE_NEW_CONTACT_NUMBER = 'UPDATE_NEW_CONTACT_NUMBER';
const UPDATE_NEW_CONTACT_MAIL = 'UPDATE_NEW_CONTACT_MAIL';
const SEND_CONTACT = 'SEND_CONTACT';
const DELL_CONTACT = 'DELL_CONTACT';
const EDIT_CONTACT = 'EDIT_CONTACT';

let initialState = {
    contacts: [],
    newContactId: '',
    newContactName: '',
    newContactNumber: '',
    newContactMail: ''
};

const createContactsReduce = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_NEW_CONTACT_ID:
            return {
                ...state,
                newContactId: action.id
            }
        case UPDATE_NEW_CONTACT_NAME:
            return {
                ...state,
                newContactName: action.name
            }
        case UPDATE_NEW_CONTACT_NUMBER:
            return {
                ...state,
                newContactNumber: action.number
            }
        case UPDATE_NEW_CONTACT_MAIL:
            return {
                ...state,
                newContactMail: action.mail
            }
        case SEND_CONTACT:
            let id = state.newContactId;
            let name = state.newContactName;
            let number = state.newContactNumber;
            let mail = state.newContactMail;
            return {
                ...state,
                newContactId: '',
                newContactName: '',
                newContactNumber: '',
                newContactMail: '',
                contacts: [...state.contacts, { id: id, name: name, number: number, mail: mail }]
            }
        case DELL_CONTACT:
            let delContactId = action.delContactId;
            return {
                ...state,
                contacts: [...state.contacts.filter(
                    del => del.id !== delContactId
                )]
            };
        case EDIT_CONTACT:
            let editId = action.id;
            let editNewName = action.name;
            let editNewNumber = action.number;
            let editNewMail = action.mail;
            return {
                ...state,
                contacts: [...state.contacts.forEach((item, i, arr) => {
                    if (item.id == editId) {
                        arr[i] = { id: editId, name: editNewName, number: editNewNumber, mail: editNewMail }
                    };
                    console.log(...state.contacts);
                })]
            };
        default:
            return state;
    }
};

export const generateNewContactIdAC = (id) => ({ type: GENERATE_NEW_CONTACT_ID, id: id });
export const updateNewContactNameAC = (name) => ({ type: UPDATE_NEW_CONTACT_NAME, name: name });
export const updateNewContactNumberAC = (number) => ({ type: UPDATE_NEW_CONTACT_NUMBER, number: number });
export const updateNewContactMailAC = (mail) => ({ type: UPDATE_NEW_CONTACT_MAIL, mail: mail });
export const sendContactAC = () => ({ type: SEND_CONTACT });
export const delContactAC = (delContactId) => ({ type: DELL_CONTACT, delContactId: delContactId });
export const editContactAC = (editId, editNewName, editNewNumber, editNewMail) => ({ type: EDIT_CONTACT, id: editId, name: editNewName, number: editNewNumber, mail: editNewMail });

export default createContactsReduce;