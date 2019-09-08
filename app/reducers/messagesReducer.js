import { NEW_MESSAGE, RECEIVE_MESSAGES } from "../actions/types";

export default (oldState = [], { type, message, messages }) => {
  switch (type) {
    case NEW_MESSAGE:
      return [...oldState, JSON.parse(message)];
    case RECEIVE_MESSAGES:
      return messages || [];
    default:
      return oldState;
  }
};
