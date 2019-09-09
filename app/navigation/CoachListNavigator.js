import { createStackNavigator } from "react-navigation";

import CoachListScreen from "../screens/CoachListScreen";
import CoachProfileScreen from "../screens/CoachProfileScreen";
import GoalListScreen from "../screens/GoalListScreen";

export default createStackNavigator(
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
