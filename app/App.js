import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ChannelScreen from "./components/ChannelScreen";
import ChannelListScreen from "./components/ChannelListScreen";
import Auth from "./components/Auth";

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      ChannelList: {
        screen: ChannelListScreen
      },
      Channel: {
        screen: ChannelScreen
      }
    },
    {
      initialRouteName: "ChannelList"
    }
  )
);

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Montserrat_black: require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <Auth />;
  }
}
