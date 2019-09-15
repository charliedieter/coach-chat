import { AuthSession } from 'expo'
import { AsyncStorage } from 'react-native'
import {
  AUTH_STORAGE_TOKEN,
  GOOGLE_WEB_APP_ID,
  API_ROOT,
  HEADERS,
} from '../utils/constants'

export async function login(navigation) {
  const redirectUrl = AuthSession.getRedirectUrl()
  const googsResponse = await AuthSession.startAsync({
    authUrl:
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `&client_id=${GOOGLE_WEB_APP_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&response_type=code` +
      `&access_type=offline` +
      `&prompt=consent` +
      `&scope=${encodeURIComponent('email profile')}`,
  })
  const railsResponse = await fetch(
    `${API_ROOT}/users/auth/google_oauth2/callback?code=${encodeURIComponent(
      googsResponse.params.code,
    )}&redirect_uri=${encodeURIComponent(redirectUrl)}`,
  )

  let { user } = await railsResponse.json()
  await AsyncStorage.setItem(AUTH_STORAGE_TOKEN, user.authentication_token)
  await navigation.navigate('AuthLoading')
  return user
}

export async function verifyToken(authentication_token) {
  try {
    const res = await fetch(`${API_ROOT}/users/auth/verify`, {
      headers: HEADERS,
      method: 'POST',
      body: JSON.stringify({ authentication_token }),
    })
    const { user } = await res.json()
    return user
  } catch (e) {
    console.log(e)
  }
}

export async function logout(navigation) {
  try {
    await AsyncStorage.removeItem(AUTH_STORAGE_TOKEN)

    const res = await fetch(`${API_ROOT}/users/sign_out`, {
      headers: HEADERS,
      method: 'DELETE',
    })
    const r = await res.json()
    navigation.navigate('AuthLoading')
    return r
  } catch (e) {
    console.log(e)
  }
}

export async function editOnboarding(screen, complete = false) {
  try {
    const res = await fetch(`${API_ROOT}/users`, {
      headers: HEADERS,
      method: 'PATCH',
      body: JSON.stringify({ screen, complete }),
    })
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}
