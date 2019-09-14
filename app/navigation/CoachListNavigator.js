import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";

import CoachListScreen from "../screens/CoachListScreen";
import CoachProfileScreen from "../screens/CoachProfileScreen";
import GoalListScreen from "../screens/GoalListScreen";
import Icon from "../components/Icon";

const stack = createStackNavigator(
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

export default stack;
