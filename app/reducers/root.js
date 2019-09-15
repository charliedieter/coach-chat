import { combineReducers } from "redux";
import goals from "./goalsReducer";
import session from "./sessionReducer";
import subscriptions from "./subscriptionsReducer";
import ui from "./uiReducer";
import messages from "./messagesReducer";
import errors from "./errorsReducer";

export default combineReducers({ errors, goals, session, ui, messages, subscriptions });
