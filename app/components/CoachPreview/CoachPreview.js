import React, { useState } from 'react'
import { View } from 'react-native'

import SubscribeModal from '../Modal/SubscribeModal'
import CoachPreviewItem from './CoachPreviewItem'

function CoachPreview({ coach, navigation, goal_id }) {
  const [isOpen, setModal] = useState(false)
  return (
    <View>
      <CoachPreviewItem
        {...coach}
        navigation={navigation}
        openModal={() => setModal(true)}
      />
      <SubscribeModal
        isOpen={isOpen}
        closeModal={() => setModal(false)}
        {...coach}
        goal_id={goal_id}
        navigation={navigation}
      />
    </View>
  )
}

export default CoachPreview
