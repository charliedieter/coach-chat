import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import ChannelListScreen from "../screens/ChannelListScreen";
import GoalListScreen from "../screens/GoalListScreen";
import CoachListScreen from "../screens/CoachListScreen";
import CoachProfileScreen from "../screens/CoachProfileScreen";
import ChannelScreen from "../screens/ChannelScreen";
import SignInScreen from "../screens/SignInScreen";

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const OnboardStack = createStackNavigator(
  {
    GoalList: {
      screen: GoalListScreen
    },
    CoachList: {
      screen: CoachListScreen
    },
    CoachProfile: {
      screen: CoachProfileScreen
    }
  },
  {
    initialRouteName: "GoalList"
  }
);

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
      App: AppStack,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen,
      Onboard: OnboardStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
