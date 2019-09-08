import { API_ROOT, HEADERS } from "../utils/constants";

export const createSubscription = async config => {
  try {
    const res = await fetch(`${API_ROOT}/subscriptions`, {
      headers: HEADERS,
      method: "POST",
      body: JSON.stringify({ subscription: config })
    });
    const { user } = await res.json();
    return user;
  } catch (e) {
    console.log(e);
  }
};
