import produce from "immer";

const GENERATE_NEW_CONTACT_ID_N = 'GENERATE_NEW_CONTACT_ID_N';
const UPDATE_NEW_CONTACT_NAME_N = 'UPDATE_NEW_CONTACT_NAME_N';
const UPDATE_NEW_CONTACT_NUMBER_N = 'UPDATE_NEW_CONTACT_NUMBER_N';
const UPDATE_NEW_CONTACT_MAIL_N = 'UPDATE_NEW_CONTACT_MAIL_N';
const UPDATE_SEARCH_CONTACT_N = 'UPDATE_SEARCH_CONTACT_N';
const SEND_CONTACT_N = 'SEND_CONTACT_N';
const DELL_CONTACT_N = 'DELL_CONTACT_N';
const EDIT_CONTACT_N = 'EDIT_CONTACT_N';

let initialState = {
    contacts: [],
    uiContacts: [],
    newContactId: '',
    newContactName: '',
    newContactNumber: '',
    newContactMail: ''
};

const createContactReduce = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_NEW_CONTACT_ID_N:
            return produce(state, draft => {
                draft.newContactId = action.id
            })
        case UPDATE_NEW_CONTACT_NAME_N:
            return produce(state, draft => {
                draft.newContactName = action.name
            })
        case UPDATE_NEW_CONTACT_NUMBER_N:
            return produce(state, draft => {
                draft.newContactNumber = action.number
            })
        case UPDATE_NEW_CONTACT_MAIL_N:
            return produce(state, draft => {
                draft.newContactMail = action.mail
            })
        case SEND_CONTACT_N:
            let id = state.newContactId;
            let name = state.newContactName;
            let number = state.newContactNumber;
            let mail = state.newContactMail;

            return produce(state, draft => {
                draft.newContactId = ''
                draft.newContactName = ''
                draft.newContactNumber = ''
                draft.newContactMail = ''
                draft.contacts.push({ id: id, name: name, number: number, mail: mail })
                draft.uiContacts.push({ id: id, name: name, number: number, mail: mail })
            });

        case UPDATE_SEARCH_CONTACT_N:
            let textSearch = action.textSearch;
            return produce(state, draft => {
                draft.uiContacts = [...state.contacts.filter(o => {
                    return Object.keys(o).some(k => {
                        return new String(o[k]).toLowerCase().indexOf
                            (textSearch) !== -1 && k !== "id";
                    });
                })]
            })
        case DELL_CONTACT_N:
            let delContactId = action.delContactId;
            let newContactsDel = [...state.contacts.filter(
                del => del.id !== delContactId
            )];
            return produce(state, draft => {
                draft.contacts = newContactsDel
                draft.uiContacts = newContactsDel
            })
        case EDIT_CONTACT_N:
            let editId = action.id;
            let editNewName = action.name;
            let editNewNumber = action.number;
            let editNewMail = action.mail;
            return produce(state, draft => {
                draft.contacts.forEach((item, i, arr) => {
                    if (item.id == editId) {
                        arr[i] = { id: editId, name: editNewName, number: editNewNumber, mail: editNewMail }
                    };
                })
                draft.uiContacts.forEach((item, i, arr) => {
                    if (item.id == editId) {
                        arr[i] = { id: editId, name: editNewName, number: editNewNumber, mail: editNewMail }
                    };
                })
            })
        default:
            return state;
    }
};

export const generateNewContactIdAC = (id) => ({ type: GENERATE_NEW_CONTACT_ID_N, id: id });
export const updateNewContactNameAC = (name) => ({ type: UPDATE_NEW_CONTACT_NAME_N, name: name });
export const updateNewContactNumberAC = (number) => ({ type: UPDATE_NEW_CONTACT_NUMBER_N, number: number });
export const updateNewContactMailAC = (mail) => ({ type: UPDATE_NEW_CONTACT_MAIL_N, mail: mail });
export const sendContactAC = () => ({ type: SEND_CONTACT_N });
export const delContactAC = (delContactId) => ({ type: DELL_CONTACT_N, delContactId: delContactId });
export const editContactAC = (editId, editNewName, editNewNumber, editNewMail) => ({ type: EDIT_CONTACT_N, id: editId, name: editNewName, number: editNewNumber, mail: editNewMail });
export const updateSearchContactAC = (textSearch) => ({ type: UPDATE_SEARCH_CONTACT_N, textSearch: textSearch });

export default createContactReduce;