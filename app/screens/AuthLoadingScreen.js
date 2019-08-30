// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = true; // just in development await AsyncStorage.getItem("userToken");
    const isRegistered = false;
    this.props.navigation.navigate(
      userToken ? (isRegistered ? "App" : "Onboard") : "Auth"
    );
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
