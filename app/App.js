import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "./components/AppContainer";

export default class extends Component {
  state = {
    ready: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Montserrat_black: require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
      ...Ionicons.font
    });
    this.setState({ ready: true });
  }

  render() {
    return this.state.ready ? <AppContainer /> : <AppLoading />;
  }
}
