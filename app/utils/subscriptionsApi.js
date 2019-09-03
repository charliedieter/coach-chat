export const createSubscription = async config => {
  try {
    const res = await fetch(`http://localhost:3000/subscriptions`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ subscription: config })
    });
    const { user } = await res.json();
    return user;
  } catch (e) {
    console.log(e);
  }
};
