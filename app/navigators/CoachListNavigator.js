import { createStackNavigator } from 'react-navigation'

import CoachList from '../screens/CoachList'
import GoalList from '../screens/GoalList'

export default createStackNavigator(
  {
    GoalList: {
      screen: GoalList,
    },
    CoachList: {
      screen: CoachList,
    },
  },
  {
    initialRouteName: 'GoalList',
  },
)
