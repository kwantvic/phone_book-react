const UPDATE_NEW_CONTACT_BODY = 'UPDATE_NEW_CONTACT_BODY';
const UPDATE_NEW_CONTACT_NUMBER = 'UPDATE_NEW_CONTACT_NUMBER';
const UPDATE_NEW_CONTACT_MAIL = 'UPDATE_NEW_CONTACT_MAIL';
const SEND_CONTACT = 'SEND_CONTACT';

let initialState = {
    contacts: [],
    newContactBody: '',
    newContactNumber: '',
    newContactMail: ''
};

const createContactsReduce = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_CONTACT_BODY:
            return {
                ...state,
                newContactBody: action.body
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
            let body = state.newContactBody;
            let number = state.newContactNumber;
            let mail = state.newContactMail;
            return {
                ...state,
                newContactBody: '',
                newContactNumber: '',
                newContactMail: '',
                contacts: [...state.contacts, { name: body, number: number, mail: mail }]
            }        
        default:
            return state;
    }
};

export const updateNewContactBodyAC = (body) => ({ type: UPDATE_NEW_CONTACT_BODY, body: body });
export const updateNewContactNumberAC = (number) => ({ type: UPDATE_NEW_CONTACT_NUMBER, number: number });
export const updateNewContactMailAC = (mail) => ({ type: UPDATE_NEW_CONTACT_MAIL, mail: mail });
export const sendContactAC = () => ({ type: SEND_CONTACT });

export default createContactsReduce;