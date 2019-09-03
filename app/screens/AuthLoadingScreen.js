// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

import { verifyToken } from "../actions/sessionActions";
import { AUTH_STORAGE_TOKEN } from "../utils/constants";

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { navigation, currentUser, verifyToken } = this.props;
    const token = await AsyncStorage.getItem(AUTH_STORAGE_TOKEN);

    let next = "Auth";

    const shouldOnboard = u => !Object.keys(u.subscriptions).length;
    if (currentUser) {
      next = shouldOnboard(currentUser) ? "Onboard" : "ChannelList";
    } else if (token) {
      const { currentUser } = await this.props.verifyToken(token);
      next = shouldOnboard(currentUser) ? "Onboard" : "ChannelList";
    }
    navigation.navigate(next);
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const msp = ({ session }) => session;

const mdp = dispatch => ({
  verifyToken: t => dispatch(verifyToken(t))
});

export default connect(
  msp,
  mdp
)(AuthLoadingScreen);
