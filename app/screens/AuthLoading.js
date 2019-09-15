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

    if (currentUser) {
      next = currentuser.has_onboarded ? 'CoachList' : 'ChannelList'
    } else if (token) {
      const { currentUser } = await this.props.verifyToken(token)
      if (currentUser) {
        next = currentUser.has_onboarded ? 'ChannelList' : 'CoachList'
      }
    }
    navigation.navigate(next)
  }

  render() {
    return <Loader />
  }
}

const msp = ({ session }) => ({
  session,
})

const mdp = dispatch => ({
  verifyToken: t => dispatch(verifyToken(t)),
})

export default connect(
  msp,
  mdp,
)(AuthLoadingScreen)
