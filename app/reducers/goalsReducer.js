import { RECEIVE_GOALS } from "../actions/types";

export default (oldState = {}, { type, goals }) => {
  switch (type) {
    case RECEIVE_GOALS:
      return { ...oldState, goals };
    default:
      return oldState;
  }
};
