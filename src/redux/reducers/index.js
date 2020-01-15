import loggedReducer from "./isLogged";
import counterReducer from "./counter";
import trips from "./trips"
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    counter: counterReducer,
    trips: trips
})

export default  allReducers;


