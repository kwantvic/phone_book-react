import produce from "immer";

const GENERATE_NEW_CONTACT_ID = 'GENERATE_NEW_CONTACT_ID';
const UPDATE_NEW_CONTACT_NAME = 'UPDATE_NEW_CONTACT_NAME';
const UPDATE_NEW_CONTACT_NUMBER = 'UPDATE_NEW_CONTACT_NUMBER';
const UPDATE_NEW_CONTACT_MAIL = 'UPDATE_NEW_CONTACT_MAIL';
const UPDATE_SEARCH_CONTACT = 'UPDATE_SEARCH_CONTACT';
const SEND_CONTACT = 'SEND_CONTACT';
const DELL_CONTACT = 'DELL_CONTACT';
const EDIT_CONTACT = 'EDIT_CONTACT';

let initialState = {
    contacts: [
        { id: `4142c0bc-7349-4cae-962e-ccac221a4f0e`, name: `Бондаренко Юлия`, number: `19336364`, mail: `bond23232@mail.ru` },
        { id: `177ae259-1858-4adf-aa74-2f30d5863f19`, name: `Нарожный Семен`, number: `953887676`, mail: `gggrek@mail.ru` },
        { id: `f8525e47-ab83-4880-b417-bb7d4ca25763`, name: `Вербицкая Лара`, number: `727345463`, mail: `bertd@gmail.com` },
        { id: `a94b12b8-8b0a-45c4-927e-006fb25b46a5`, name: `Луговой Виктор`, number: `514774455`, mail: `gerd44@gmail.com` },
        { id: `2b8e97ed-5044-4ff1-a1bd-79138e2ba5a4`, name: `Рудакова Диана`, number: `621805818`, mail: `rudas43@gmail.com` },
        { id: `bc353911-95da-4ab2-a8e4-9cdc1da7c455`, name: `Кузьменко Алексей`, number: `146366436`, mail: `kuzzzay1@gmail.com` },
        { id: `ff62c17e-0a66-4b6b-8a17-1611a92ec401`, name: `Сухостат Владимир`, number: `493006008`, mail: `verakov65@mail.ru` },
        { id: `ada29edf-1f68-4a22-8e94-fe427f64e68a`, name: `Рубан Игнат`, number: `5711898812`, mail: `ignat444@mail.ua` },
        { id: `0472b3f1-2df3-4ed2-8a6b-e5fd8801679d`, name: `Маркосян Михаил`, number: `0712647677`, mail: `mara2121@ukr.net` },
        { id: `0c436b08-2b8d-491f-9e89-6635e81076b8`, name: `Прус Игорь`, number: `619710791`, mail: `parus21qqq@gmail.com` }

    ],
    uiContacts: [
        { id: `4142c0bc-7349-4cae-962e-ccac221a4f0e`, name: `Бондаренко Юлия`, number: `19336364`, mail: `bond23232@mail.ru` },
        { id: `177ae259-1858-4adf-aa74-2f30d5863f19`, name: `Нарожный Семен`, number: `953887676`, mail: `gggrek@mail.ru` },
        { id: `f8525e47-ab83-4880-b417-bb7d4ca25763`, name: `Вербицкая Лара`, number: `727345463`, mail: `bertd@gmail.com` },
        { id: `a94b12b8-8b0a-45c4-927e-006fb25b46a5`, name: `Луговой Виктор`, number: `514774455`, mail: `gerd44@gmail.com` },
        { id: `2b8e97ed-5044-4ff1-a1bd-79138e2ba5a4`, name: `Рудакова Диана`, number: `621805818`, mail: `rudas43@gmail.com` },
        { id: `bc353911-95da-4ab2-a8e4-9cdc1da7c455`, name: `Кузьменко Алексей`, number: `146366436`, mail: `kuzzzay1@gmail.com` },
        { id: `ff62c17e-0a66-4b6b-8a17-1611a92ec401`, name: `Сухостат Владимир`, number: `493006008`, mail: `verakov65@mail.ru` },
        { id: `ada29edf-1f68-4a22-8e94-fe427f64e68a`, name: `Рубан Игнат`, number: `5711898812`, mail: `ignat444@mail.ua` },
        { id: `0472b3f1-2df3-4ed2-8a6b-e5fd8801679d`, name: `Маркосян Михаил`, number: `0712647677`, mail: `mara2121@ukr.net` },
        { id: `0c436b08-2b8d-491f-9e89-6635e81076b8`, name: `Прус Игорь`, number: `619710791`, mail: `parus21qqq@gmail.com` }

    ],
    newContactId: '',
    newContactName: '',
    newContactNumber: '',
    newContactMail: ''
};

const myPhoneBookReduce = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_NEW_CONTACT_ID:
            return produce(state, draft => {
                draft.newContactId = action.id
            })
        case UPDATE_NEW_CONTACT_NAME:
            return produce(state, draft => {
                draft.newContactName = action.name
            })
        case UPDATE_NEW_CONTACT_NUMBER:
            return produce(state, draft => {
                draft.newContactNumber = action.number
            })
        case UPDATE_NEW_CONTACT_MAIL:
            return produce(state, draft => {
                draft.newContactMail = action.mail
            })
        case SEND_CONTACT:
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
        case UPDATE_SEARCH_CONTACT:
            let textSearch = action.textSearch;
            return produce(state, draft => {
                draft.uiContacts = [...state.contacts.filter(o => {
                    return Object.keys(o).some(k => {
                        return new String(o[k]).toLowerCase().indexOf
                            (textSearch) !== -1 && k !== "id";
                    });
                })]
            })
        case DELL_CONTACT:
            let delContactId = action.delContactId;
            let newContactsDel = [...state.contacts.filter(
                del => del.id !== delContactId
            )];
            return produce(state, draft => {
                draft.contacts = newContactsDel
                draft.uiContacts = newContactsDel
            })
        case EDIT_CONTACT:
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

export const generateNewContactIdAC = (id) => ({ type: GENERATE_NEW_CONTACT_ID, id: id });
export const updateNewContactNameAC = (name) => ({ type: UPDATE_NEW_CONTACT_NAME, name: name });
export const updateNewContactNumberAC = (number) => ({ type: UPDATE_NEW_CONTACT_NUMBER, number: number });
export const updateNewContactMailAC = (mail) => ({ type: UPDATE_NEW_CONTACT_MAIL, mail: mail });
export const sendContactAC = () => ({ type: SEND_CONTACT });
export const delContactAC = (delContactId) => ({ type: DELL_CONTACT, delContactId: delContactId });
export const editContactAC = (editId, editNewName, editNewNumber, editNewMail) => ({ type: EDIT_CONTACT, id: editId, name: editNewName, number: editNewNumber, mail: editNewMail });
export const updateSearchContactAC = (textSearch) => ({ type: UPDATE_SEARCH_CONTACT, textSearch: textSearch });

export default myPhoneBookReduce;