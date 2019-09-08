import { NEW_MESSAGE, RECEIVE_MESSAGES } from "./types";
import { API_ROOT } from "../utils/constants";

export const getChatHistory = coaching_id => dispatch => {
  fetch(`${API_ROOT}/messages?coaching_id=${coaching_id}`).then(m => {
    m.json().then(messages => {
      dispatch({
        type: RECEIVE_MESSAGES,
        messages
      });
    });
  });
};

export function unsubscribeConversation(coaching_id) {
  return {
    channel: "MessagesChannel",
    coaching_id,
    leave: true
  };
}

export function subscribeConversation(coaching_id) {
  return dispatch =>
    dispatch({
      channel: "MessagesChannel",
      coaching_id,
      received: message => {
        return dispatch({
          type: NEW_MESSAGE,
          message
        });
      }
    });
}
