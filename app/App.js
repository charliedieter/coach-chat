import React, { Component } from "react";
import { Provider } from "react-redux";
import { Text } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "./navigation/AppNavigator";
import configureStore from "./store";

const store = configureStore();

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
    return (
      <Provider store={store}>
        {this.state.ready ? <AppContainer /> : <Text>loading...</Text>}
      </Provider>
    );
  }
}
