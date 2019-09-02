import { RECEIVE_USER } from "../actions/types";

export default (oldState = { currentUser: null }, { type, currentUser }) => {
  switch (type) {
    case RECEIVE_USER:
      return { ...oldState, currentUser };
    default:
      return oldState;
  }
};
