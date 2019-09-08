import { RECEIVE_USER, REMOVE_USER } from "../actions/types";

export default (oldState = { currentUser: null }, { type, currentUser }) => {
  switch (type) {
    case RECEIVE_USER:
      return { ...oldState, currentUser };
    case REMOVE_USER:
      return { currentUser: null };
    default:
      return oldState;
  }
};
