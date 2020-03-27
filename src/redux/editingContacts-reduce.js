const DELL_CONTACT = 'DELL_CONTACT';

let initialState = {
    contacts: [
        { name: "1", number: "1", mail: "1" },
        { name: "2", number: "2", mail: "2" },
        { name: "3", number: "3", mail: "3" }
    ]
};

const editingContactsReduce = (state = initialState, action) => {
    console.log(state.contacts);
    switch (action.type) {
        case DELL_CONTACT:
            let delContact = [action.delContact];
            return {
                ...state,
                contacts: [...state.contacts.filter(
                    (nAll) => {
                        return delContact.some(
                            (n1) => {
                                return nAll.name !== n1.name
                                    && nAll.number !== n1.number
                                    && nAll.mail !== n1.mail
                            }
                        )
                    }
                )]
            };
        default:
            return state;
    }
};

export const delContactAC = (delContact) => ({ type: DELL_CONTACT, delContact: delContact });

export default editingContactsReduce;