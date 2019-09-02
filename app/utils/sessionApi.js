import { AuthSession } from "expo";
import { AsyncStorage } from "react-native";
import { AUTH_STORAGE_TOKEN, GOOGLE_WEB_APP_ID } from "../utils/constants";

export async function login() {
  const redirectUrl = AuthSession.getRedirectUrl();
  const googsResponse = await AuthSession.startAsync({
    authUrl:
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `&client_id=${GOOGLE_WEB_APP_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&response_type=code` +
      `&access_type=offline` +
      `&prompt=consent` +
      `&scope=${encodeURIComponent("email profile")}`
  });
  const railsResponse = await fetch(
    `http://localhost:3000/users/auth/google_oauth2/callback?code=${encodeURIComponent(
      googsResponse.params.code
    )}&redirect_uri=${encodeURIComponent(redirectUrl)}`
  );

  const { success, user } = await railsResponse.json();
  if (success === true) {
    const u = JSON.parse(user);
    await AsyncStorage.setItem(AUTH_STORAGE_TOKEN, u.authentication_token);
    return u;
  }
}

export async function verifyToken(authentication_token) {
  try {
    const res = await fetch(`http://localhost:3000/users/auth/verify`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ authentication_token })
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
