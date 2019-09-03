import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

export default (oldState = { modalOpen: false }, { type }) => {
  switch (type) {
    case OPEN_MODAL:
      return { modalOpen: true };
    case CLOSE_MODAL:
      return { modalOpen: false };
    default:
      return oldState;
  }
};
