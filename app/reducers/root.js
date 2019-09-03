import { combineReducers } from "redux";
import goals from "./goalsReducer";
import session from "./sessionReducer";
import ui from "./uiReducer";

export default combineReducers({ goals, session, ui });
