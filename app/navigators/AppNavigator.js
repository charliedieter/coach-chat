import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthLoading from '../screens/AuthLoading'
import AuthNavigator from './AuthNavigator'
import ChatNavigator from './ChatNavigator'
import CoachListNavigator from './CoachListNavigator'

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      AuthLoading: AuthLoading,
      Chat: ChatNavigator,
      CoachList: CoachListNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
)
