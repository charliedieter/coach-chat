import {
  NEW_MESSAGE,
  RECEIVE_MESSAGES,
  CLEAR_MESSAGES
} from "../actions/types";

export default (oldState = [], { type, message, messages }) => {
  switch (type) {
    case NEW_MESSAGE:
      return [...oldState, JSON.parse(message)];
    case RECEIVE_MESSAGES:
      return messages || [];
    case CLEAR_MESSAGES:
      return [];
    default:
      return oldState;
  }
};
