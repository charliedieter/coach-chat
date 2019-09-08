// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import styles from "../utils/styles";
import { login } from "../actions/sessionActions";

import GoogleSignInButton from "../components/GoogleSignInButton";

class SignInScreen extends Component {
  componentDidUpdate(p) {
    if (this.props.currentUser) {
      this.props.navigation.navigate("AuthLoading");
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container2}>
        <GoogleSignInButton onPress={() => this.props.login(navigation)}>
          Sign in with Google
        </GoogleSignInButton>
        <Button title="Sign in as coach" />
      </View>
    );
  }
}

const msp = ({ session: { currentUser } }) => ({ currentUser });

const mdp = dispatch => ({
  login: navigation => dispatch(login(navigation))
});

export default connect(
  msp,
  mdp
)(SignInScreen);
