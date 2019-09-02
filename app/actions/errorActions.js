import { CLEAR_ERRORS, RECEIVE_ERRORS } from "./types";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({ type: CLEAR_ERRORS });
