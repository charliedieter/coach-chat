import React from "react";

import { createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { TouchableOpacity } from "react-native";

import CoachListNavigator from "./CoachListNavigator";

import ChannelListScreen from "../screens/ChannelListScreen";
import ChannelScreen from "../screens/ChannelScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import SideMenu from "../components/SideMenu";
import Icon from "../components/Icon";

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
    initialRouteName: "ChannelList",
    defaultNavigationOptions: nav => ({
      headerRight: (
        <TouchableOpacity onPress={nav.toggleDrawer}>
          <Icon
            type="MaterialCommunityIcons"
            name="hamburger"
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>
      )
    })
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
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerPosition: "right",
    drawerType: "back"
  }
);
