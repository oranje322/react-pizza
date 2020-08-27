import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {filterReducer} from "./reducers/filterReducer";
import {pizzasReducer} from "./reducers/pizzasReducer";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        filter: filterReducer,
        pizzas: pizzasReducer
    }
), composeEnhancers(  applyMiddleware(thunk)));

window.store = store;

export default store