import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { AuthLoadingScreen, SignInScreen } from "./Auth";
import ChannelScreen from "./ChannelScreen";
import ChannelListScreen from "./ChannelListScreen";

const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const AppStack = createStackNavigator(
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
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
