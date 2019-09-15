import { createStackNavigator } from 'react-navigation'

import CoachListScreen from '../screens/CoachListScreen'
import GoalListScreen from '../screens/GoalListScreen'

export default createStackNavigator(
  {
    GoalList: {
      screen: GoalListScreen,
    },
    CoachList: {
      screen: CoachListScreen,
    },
  },
  {
    initialRouteName: 'GoalList',
  },
)
