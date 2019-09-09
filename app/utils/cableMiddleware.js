import ActionCable from "react-native-actioncable";
import { API_WS_ROOT } from "./constants";
import * as _ from "lodash";

export default function cableMiddleware() {
  const cable = ActionCable.createConsumer(`${API_WS_ROOT}/cable`);

  return ({ dispatch, getState }) => next => action => {
    if (typeof action === "function") return next(action);

    const { channel, coaching_id, leave } = action;
    let { received } = action;

    if (!channel) return next(action);

    if (leave) {
      const subscription = _.find(
        cable.subscriptions.subscriptions,
        sub => sub.identifier === JSON.stringify({ channel, coaching_id })
      );
      return cable.subscriptions.remove(subscription);
    }

    if (typeof received === "string") {
      received = result => dispatch({ type: received, result });
    }

    return cable.subscriptions.create({ channel, coaching_id }, { received });
  };
}
