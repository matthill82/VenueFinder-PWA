import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import SearchBar from "./searchbar/searchbarReducer";

const rootReducer = combineReducers({
  SearchBar
});

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
