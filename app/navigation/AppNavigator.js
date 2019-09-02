import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import AuthNavigator from "./AuthNavigator";
import ChatNavigator from "./ChatNavigator";
import OnboardNavigator from "./OnboardNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      AuthLoading: AuthLoadingScreen,
      Chat: ChatNavigator,
      Onboard: OnboardNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
