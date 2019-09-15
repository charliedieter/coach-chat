import * as API from '../utils/subscriptionsApi'
import { receiveErrors } from './errorActions'
import { RECEIVE_SUBSCRIPTIONS } from './types'

const receiveSubscriptions = subscriptions => ({
  type: RECEIVE_SUBSCRIPTIONS,
  subscriptions,
})

export const createSubscription = (subscription, navigation) => dispatch => {
  return API.createSubscription(subscription)
    .then(s => {
      navigation.navigate('AuthLoading')
      dispatch(receiveSubscriptions(s))
    })
    .catch(e => dispatch(receiveErrors(e)))
}

export const archiveSubscription = subscription => dispatch => {
  return API.archiveSubscription(subscription)
    .then(s => dispatch(receiveSubscriptions(s)))
    .catch(e => dispatch(receiveErrors(e)))
}
