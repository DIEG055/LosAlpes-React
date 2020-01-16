import loggedReducer from "./isLogged";
import counterReducer from "./counter";
import trips from "./trips"
import cattle from "./cattle"
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    counter: counterReducer,
    trips: trips,
    cattle: cattle
})

export default  allReducers;


