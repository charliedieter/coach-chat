import React, { Component } from "react";
import { AuthSession } from "expo";

import { Button, StyleSheet, Text, View } from "react-native";

const GOOGLE_WEB_APP_ID = "127131846404-1259o38imup4976lkif2cs75a24nfcnt.apps.googleusercontent.com";

export default class extends Component {
  state = {
    result: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Open Googs Auth" onPress={this._signinAsync} />
        {this.state.result ? <Text>{JSON.stringify(this.state.result)}</Text> : null}
      </View>
    );
  }
  // https://auth.expo.io/@cdieter/aurlfriendlyname
  // "4/qQHyhYmyo58bq34NRopF0yCSCYQZoUBJLAONBz2SyqnC8_BK9le538GIiPKo5uo_oQ1P836yi9b0g97NWZOTBRo";

  _signinAsync = async () => {
    // make request to googs
    let redirectUrl = AuthSession.getRedirectUrl();

    let googs = await AuthSession.startAsync({
      authUrl:
        `https://accounts.google.com/o/oauth2/v2/auth?` +
        `&client_id=${GOOGLE_WEB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&response_type=code` +
        `&access_type=offline` +
        `&prompt=consent` +
        `&scope=${encodeURIComponent(
          "https://www.googleapis.com/auth/plus.profile.emails.read https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/contacts"
        )}`
    });

    // make request from rails
    let result;
    try {
      result = await fetch({
        api: "http://6781c85a.ngrok.io/users/auth/google_oauth2/callback",
        method: "get",
        params: {
          code: googs.params.code,
          redirect_uri: redirectUrl
        }
      });
    } catch (error) {
      console.log(error);
    }

    console.log(result);

    // const { auth_token, auth_email } = result.data;
    // this.setState({ result });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
