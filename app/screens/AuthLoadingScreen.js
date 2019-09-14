// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'

import Loader from '../components/Loader'
import { verifyToken } from '../actions/sessionActions'
import { AUTH_STORAGE_TOKEN } from '../utils/constants'

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this.onboardRedirect()
  }

  onboardRedirect = async () => {
    const { navigation, currentUser } = this.props
    const token = await AsyncStorage.getItem(AUTH_STORAGE_TOKEN)

    let next = 'Auth'

    const shouldOnboard = u => !Object.keys(u.subscriptions).length
    if (currentUser) {
      next = shouldOnboard(currentUser) ? 'CoachList' : 'ChannelList'
    } else if (token) {
      const { currentUser } = await this.props.verifyToken(token)
      next = shouldOnboard(currentUser) ? 'CoachList' : 'ChannelList'
    }
    navigation.navigate(next)
  }

  render() {
    return <Loader />
  }
}

const msp = ({ session }) => session

const mdp = dispatch => ({
  verifyToken: t => dispatch(verifyToken(t)),
})

export default connect(
  msp,
  mdp,
)(AuthLoadingScreen)
