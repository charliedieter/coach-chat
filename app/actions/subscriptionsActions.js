import * as API from "../utils/subscriptionsApi";
import { receiveErrors } from "./errorActions";
import { receiveCurrentUser } from "./sessionActions";

export const createSubscription = config => dispatch => {
  return API.createSubscription(config)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(e => dispatch(receiveErrors(e)));
};
