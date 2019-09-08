import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/types";

export default (oldState = {}, { type, errors }) => {
  switch (type) {
    case RECEIVE_ERRORS:
      return { ...oldState, errors };
    case CLEAR_ERRORS:
      return {};
    default:
      return oldState;
  }
};
