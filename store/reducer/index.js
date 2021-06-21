import { combineReducers } from "redux";
import clubReducer from "./clubReducer";

export const rootReducer = combineReducers({
  club: clubReducer,
});
