import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import AuthNavigator from "./AuthNavigator";
import ChatNavigator from "./ChatNavigator";
import CoachListNavigator from "./CoachListNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      AuthLoading: AuthLoadingScreen,
      Chat: ChatNavigator,
      CoachList: CoachListNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
