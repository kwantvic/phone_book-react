import { combineReducers, createStore } from "redux";
import createContactReduce from "./create-reduce";
import myPhoneBookReduce from "./myPhoneBook-reduce";

let reducers = combineReducers({
    contactsPage: createContactReduce,
    myPhoneBookContactsPage: myPhoneBookReduce
});

let store = createStore(reducers);

export default store;