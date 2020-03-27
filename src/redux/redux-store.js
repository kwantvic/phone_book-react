import { combineReducers, createStore } from "redux";
import createContactsReduce from "./create-reduce";
import editingContactsReduce from "./editingContacts-reduce";

let reducers = combineReducers({
    contactsPage: createContactsReduce,
    editingContactsPage: editingContactsReduce
});

let store = createStore(reducers);

export default store;