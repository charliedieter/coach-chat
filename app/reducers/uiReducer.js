import { REQUEST_MESSAGES, RECEIVE_MESSAGES } from '../actions/types'

export default (oldState = { isLoading: false }, { type }) => {
  switch (type) {
    case REQUEST_MESSAGES:
      return { ...oldState, isLoading: true }
    case RECEIVE_MESSAGES:
      return { ...oldState, isLoading: false }
    default:
      return oldState
  }
}
