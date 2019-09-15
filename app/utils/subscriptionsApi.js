import { API_ROOT, HEADERS } from '../utils/constants'

export const createSubscription = async subscription => {
  try {
    const res = await fetch(`${API_ROOT}/coachings`, {
      headers: HEADERS,
      method: 'POST',
      body: JSON.stringify({ subscription }),
    })
    return await res.json()
  } catch (e) {
    console.log(e)
  }
}

export const archiveSubscription = async subscription => {
  try {
    const res = await fetch(`${API_ROOT}/coachings/${subscription.id}`, {
      headers: HEADERS,
      method: 'PATCH',
      body: JSON.stringify({ subscription, archive: 1 }),
    })

    const { user } = await res.json()
    return user
  } catch (e) {
    console.log(e)
  }
}
