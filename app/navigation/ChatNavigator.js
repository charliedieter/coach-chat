import { createStackNavigator } from "react-navigation";

import ChannelListScreen from "../screens/ChannelListScreen";
import ChannelScreen from "../screens/ChannelScreen";

export default createStackNavigator(
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
