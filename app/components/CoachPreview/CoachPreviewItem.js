import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import Icon from '../Icon'
import styles from '../../utils/styles'

export default function CoachPreview({
  id,
  name,
  bio,
  avatar,
  openModal,
  skills,
}) {
  return (
    <TouchableOpacity onPress={openModal} style={styles.listItem}>
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
            source={{ uri: avatar }}
          />
          <Text style={{ fontSize: 20 }}>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {skills.map(skill => (
            <Icon
              name={skill.icon_name}
              type={skill.icon_type}
              key={`${id}--skill-icon--${skill.icon_name}-${skill.id}`}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  )
}
