export const fetchGoals = async () => {
  const res = await fetch("http://localhost:3000/goals");
  return await res.json();
};
