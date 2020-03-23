const UPDATE_NEW_CONTACT_BODY = 'UPDATE_NEW_CONTACT_BODY';
const SEND_CONTACT = 'SEND_CONTACT';

let initialState = {
    contacts: [],
    newContactBody: ''
};

const createContactsReduce = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_CONTACT_BODY:
            return {
                ...state,
                newContactBody: action.body
            }
        case SEND_CONTACT:
            let body = state.newContactBody;
            return {
                ...state,
                newContactBody: '',
                contacts: [...state.contacts, {id: 1, name: body}]
            }
        default:
            return state;
    }
};

export const updateNewContactBodyAC = (body) => ({ type: UPDATE_NEW_CONTACT_BODY, body: body });
export const sendContactAC = () => ({ type: SEND_CONTACT });

export default createContactsReduce;