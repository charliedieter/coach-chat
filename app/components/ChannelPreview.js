import React, { PureComponent } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import Swipeout from 'react-native-swipeout'

import Icon from '../components/Icon'
import styles from '../utils/styles'

// const swipeBtns = [
//   {
//     text: 'delete',
//     backgroundColor: colors.red,
//     onPress: this.props.openModal,
//   },
//   {
//     text: 'view profile',
//     backgroundColor: colors.green,
//     onPress: () => this.props.navigation.navigate('CoachProfile'),
//   },
// ]

// return (
//   <Swipeout
//     right={swipeBtns}
//     backgroundColor="transparent"
//     key={`channel-list-item--${subscription.id}`}
//   >
//     <ChannelPreview {...subscription} navigation={this.props.navigation} />
//   </Swipeout>
// )

export default class ChannelPreview extends PureComponent {
  onSelectChannel = () => {
    const { id, goal, coach } = this.props.subscription

    this.props.navigation.navigate('Channel', {
      id,
      goal,
      coach,
    })
  }

  render() {
    const {
      coach,
      goal: { icon_name, icon_type },
    } = this.props.subscription

    return (
      <TouchableOpacity onPress={this.onSelectChannel} style={styles.listItem}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <View style={{ justifyContent: 'center' }}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                marginBottom: 4,
              }}
              source={{ uri: coach.avatar }}
            />
            <Text style={{ fontSize: 20 }}>{coach.name}</Text>
          </View>
          <Icon name={icon_name} type={icon_type} />
        </View>
      </TouchableOpacity>
    )
  }
}
