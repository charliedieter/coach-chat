import {
  OPEN_MODAL,
  CLOSE_MODAL,
  REQUEST_MESSAGES,
  RECEIVE_MESSAGES
} from "../actions/types";

export default (
  oldState = { modalOpen: false, isLoading: false },
  { type }
) => {
  switch (type) {
    case OPEN_MODAL:
      return { ...oldState, modalOpen: true };
    case CLOSE_MODAL:
      return { ...oldState, modalOpen: false };
    case REQUEST_MESSAGES:
      return { ...oldState, isLoading: true };
    case RECEIVE_MESSAGES:
      return { ...oldState, isLoading: false };
    default:
      return oldState;
  }
};
