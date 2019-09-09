import { createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import CoachListNavigator from "./CoachListNavigator";

import ChannelListScreen from "../screens/ChannelListScreen";
import ChannelScreen from "../screens/ChannelScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const chatStack = createStackNavigator(
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

const profileStack = createStackNavigator({
  UserProfile: { screen: UserProfileScreen }
});

export default createDrawerNavigator(
  {
    Chat: { screen: chatStack },
    Profile: { screen: profileStack },
    Coaches: { screen: CoachListNavigator }
  },
  {
    drawerPosition: "right",
    drawerType: "back"
  }
);
