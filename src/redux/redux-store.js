import { combineReducers, createStore } from "redux";
import createContactsReduce from "./create-reduce";
import editingContacts from "./editingContacts-reduce";

let reducers = combineReducers({
    contactsPage: createContactsReduce,
    editingContactsPage: editingContacts,
});

let store = createStore(reducers);

export default store;