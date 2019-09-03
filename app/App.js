import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Text } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import AppContainer from "./navigation/AppNavigator";
import configureStore from "./store";
import { fetchGoals } from "./utils/goalsApi";

class App extends Component {
  state = {};

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Montserrat_black: require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
      ...Ionicons.font
    });

    const initialGoals = await fetchGoals();

    this.setState({ ready: true, initialGoals });
  }

  render() {
    return this.state.ready ? (
      <Provider
        store={configureStore({ goals: this.state.initialGoals || {} })}
      >
        <AppContainer />
      </Provider>
    ) : (
      <Text>loading...</Text>
    );
  }
}

export default App;
