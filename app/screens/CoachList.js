import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'

import DrawerIcon from '../components/DrawerIcon'
import CoachPreview from '../components/CoachPreview'
import styles from '../utils/styles'
import { API_ROOT } from '../utils/constants'

export default class extends Component {
  state = {}

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <DrawerIcon navigation={navigation} />,
      headerTitle: <Text style={styles.header2}></Text>,
    }
  }

  async componentDidMount() {
    const goal = this.props.navigation.getParam('name')
    const res = await fetch(
      `${API_ROOT}/coaches?goal=${encodeURIComponent(goal)}`,
    )
    const { coaches } = await res.json()

    this.setState({ coaches })
  }

  render() {
    const { navigation } = this.props
    const { coaches } = this.state
    const goal_id = this.props.navigation.getParam('goal_id')

    return (
      <ScrollView>
        <View style={{ display: 'flex', height: '100%' }}>
          {coaches &&
            coaches.map(({ coach }) => {
              return (
                <CoachPreview
                  coach={coach}
                  key={`coach--${coach.id}`}
                  goal_id={goal_id}
                  navigation={navigation}
                />
              )
            })}
        </View>
      </ScrollView>
    )
  }
}
