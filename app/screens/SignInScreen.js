// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { AuthSession } from "expo";
import { AsyncStorage, Button, StyleSheet, Text, View } from "react-native";

import GoogleSignInButton from "../components/GoogleSignInButton";
const GOOGLE_WEB_APP_ID =
  "127131846404-1259o38imup4976lkif2cs75a24nfcnt.apps.googleusercontent.com";

export default class extends Component {
  state = {
    currentUser: null
  };

  render() {
    return (
      <View style={styles.container}>
        <GoogleSignInButton onPress={this._signinAsync}>
          Sign in with Google
        </GoogleSignInButton>
        {this.state.currentUser ? <Text>nah, dawg</Text> : null}
      </View>
    );
  }

  _signinAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    // make request to googs
    let googs = await AuthSession.startAsync({
      authUrl:
        `https://accounts.google.com/o/oauth2/v2/auth?` +
        `&client_id=${GOOGLE_WEB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&response_type=code` +
        `&access_type=offline` +
        `&prompt=consent` +
        `&scope=${encodeURIComponent("email profile")}`
    });

    // make request to rails
    const result = await fetch(
      `http://localhost:3000/users/auth/google_oauth2/callback?code=${encodeURIComponent(
        googs.params.code
      )}&redirect_uri=${encodeURIComponent(redirectUrl)}`
    );

    const { success, user } = await result.json();

    if (success === true) {
      this.setState({ currentUser: JSON.parse(user) });
      await AsyncStorage.setItem("AURLFRIENDLYNAME_TOKEN", "hi");
      this.props.navigation.navigate("App");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
