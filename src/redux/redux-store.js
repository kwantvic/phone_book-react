import { combineReducers, createStore } from "redux";
import createContactsReduce from "./create-reduce";

let reducers = combineReducers({
    contactsPage: createContactsReduce,
});

let store = createStore(reducers);

export default store;