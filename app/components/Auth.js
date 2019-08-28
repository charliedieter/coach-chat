// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { AuthSession } from "expo";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";
const GOOGLE_WEB_APP_ID =
  "127131846404-1259o38imup4976lkif2cs75a24nfcnt.apps.googleusercontent.com";

export class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export class SignInScreen extends Component {
  state = {
    currentUser: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Open Googs Auth" onPress={this._signinAsync} />
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
