import { RECEIVE_USER, REMOVE_USER } from "./types";
import { receiveErrors } from "./errorActions";
import * as API from "../utils/sessionApi";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser
});

export const login = navigation => dispatch =>
  API.login(navigation)
    .then(u => dispatch(receiveCurrentUser(u)))
    .catch(e => dispatch(receiveErrors(e)));

export const verifyToken = t => dispatch =>
  API.verifyToken(t)
    .then(u => dispatch(receiveCurrentUser(u)))
    .catch(e => dispatch(receiveErrors(e)));

export const logout = navigation => dispatch => {
  API.logout(navigation).then(() =>
    dispatch({
      type: REMOVE_USER
    })
  );
};
