import { API_ROOT } from "../utils/constants";

export const fetchGoals = async () => {
  const res = await fetch(`${API_ROOT}/goals`);
  return await res.json();
};
