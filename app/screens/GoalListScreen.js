import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'

import Icon from '../components/Icon'
import DrawerIcon from '../components/DrawerIcon'
import styles from '../utils/styles'
import { editOnboarding } from '../utils/sessionApi'

function GoalItem({ name, icon_type, icon_name, navigation, id }) {
  const next = async () => {
    await editOnboarding('GoalList')

    navigation.navigate('CoachList', {
      goal_id: id,
      name,
    })
  }

  return (
    <TouchableOpacity
      key={`Goal--${name}`}
      style={styles.listItem}
      onPress={next}
    >
      <Icon type={icon_type} name={icon_name} size={10} />
      <Text style={{ ...styles.header2, marginLeft: 10 }}>{name}</Text>
    </TouchableOpacity>
  )
}

class GoalsListScreen extends PureComponent {
  state = {}

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={styles.header1}>what is your goal?</Text>,
    headerRight: <DrawerIcon navigation={navigation} />,
  })

  render() {
    const { goals, navigation } = this.props
    return (
      <SafeAreaView>
        <View style={{ display: 'flex', height: '100%' }}>
          {goals &&
            goals.map(goal => (
              <GoalItem
                {...goal}
                key={`goal-item--${goal.id}`}
                navigation={navigation}
              />
            ))}
        </View>
      </SafeAreaView>
    )
  }
}

const msp = ({ goals }) => {
  return {
    goals: Object.values(goals),
  }
}

export default connect(msp)(GoalsListScreen)
