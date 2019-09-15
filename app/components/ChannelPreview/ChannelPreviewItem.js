import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import Icon from '../Icon'
import Button from '../Button'
import DailyCheckinModal from '../Modal/CheckinModal'
import styles, { colors } from '../../utils/styles'

export default function({ id, coach, goal, navigation }) {
  const [isOpen, setModal] = useState(false)

  const onSelectChannel = () => {
    navigation.navigate('Channel', {
      id,
      goal,
      coach,
    })
  }

  return (
    <TouchableOpacity
      onPress={onSelectChannel}
      style={{ ...styles.listItem, flexDirection: 'column' }}
    >
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
        <Icon name={goal.icon_name} type={goal.icon_type} />
      </View>
      <Button
        title={`Check in with ${coach.name}`}
        style={{ width: '100%', backgroundColor: colors.green }}
        onPress={() => setModal(true)}
      />
      <DailyCheckinModal isOpen={isOpen} closeModal={() => setModal(false)} />
    </TouchableOpacity>
  )
}
