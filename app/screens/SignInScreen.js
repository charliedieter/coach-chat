// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import styles from "../utils/styles";
import { login } from "../actions/sessionActions";

import GoogleSignInButton from "../components/GoogleSignInButton";

class SignInScreen extends Component {
  render() {
    const { login } = this.props;
    return (
      <View style={styles.container2}>
        <GoogleSignInButton onPress={login}>
          Sign in with Google
        </GoogleSignInButton>
      </View>
    );
  }
}

const mdp = dispatch => ({
  login: () => dispatch(login())
});

export default connect(
  null,
  mdp
)(SignInScreen);
