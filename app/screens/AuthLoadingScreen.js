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
    if (currentUser) {
      next = true ? "Onboard" : "Chat";
    } else if (token) {
      const r = await verifyToken(token);
      next = r && r.currentUser ? "Onboard" : "Auth";
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
