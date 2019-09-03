import { RECEIVE_USER } from "./types";
import { receiveErrors } from "./errorActions";
import * as API from "../utils/sessionApi";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser
});

export const login = () => dispatch =>
  API.login()
    .then(u => dispatch(receiveCurrentUser(u)))
    .catch(e => dispatch(receiveErrors(e)));

export const verifyToken = t => dispatch =>
  API.verifyToken(t)
    .then(u => dispatch(receiveCurrentUser(u)))
    .catch(e => dispatch(receiveErrors(e)));
