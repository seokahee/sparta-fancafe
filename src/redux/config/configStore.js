import { createStore } from "redux";
import { combineReducers } from "redux";
import commentsReducer from "redux/modules/Comments";

const rootReducer = combineReducers({
  commentsReducer,
});

const store = createStore(rootReducer);

export default store;
