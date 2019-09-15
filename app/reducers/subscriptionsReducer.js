import { RECEIVE_SUBSCRIPTIONS, RECEIVE_USER } from '../actions/types'

export default (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.currentUser.subscriptions || {}
    case RECEIVE_SUBSCRIPTIONS:
      const { subscriptions } = action
      return { ...oldState, subscriptions }
    default:
      return oldState
  }
}
