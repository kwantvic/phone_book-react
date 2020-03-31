const GENERATE_NEW_CONTACT_ID = 'GENERATE_NEW_CONTACT_ID';
const UPDATE_NEW_CONTACT_NAME = 'UPDATE_NEW_CONTACT_NAME';
const UPDATE_NEW_CONTACT_NUMBER = 'UPDATE_NEW_CONTACT_NUMBER';
const UPDATE_NEW_CONTACT_MAIL = 'UPDATE_NEW_CONTACT_MAIL';
const SEND_CONTACT = 'SEND_CONTACT';
const DELL_CONTACT = 'DELL_CONTACT';


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
            function uuidv4() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            };        
            let newContactId = uuidv4();
            return {
                ...state,
                newContactId: newContactId
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
            console.log(state);
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
        default:
            return state;
    }
};

export const generateNewContactIdAC = () => ({ type: GENERATE_NEW_CONTACT_ID});
export const updateNewContactNameAC = (name) => ({ type: UPDATE_NEW_CONTACT_NAME, name: name });
export const updateNewContactNumberAC = (number) => ({ type: UPDATE_NEW_CONTACT_NUMBER, number: number });
export const updateNewContactMailAC = (mail) => ({ type: UPDATE_NEW_CONTACT_MAIL, mail: mail });
export const sendContactAC = () => ({ type: SEND_CONTACT });
export const delContactAC = (delContactId) => ({ type: DELL_CONTACT, delContactId: delContactId });


export default createContactsReduce;