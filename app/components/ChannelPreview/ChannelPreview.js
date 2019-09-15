import React, { useState } from 'react'
import Swipeout from 'react-native-swipeout'

import ChannelPreviewItem from './ChannelPreviewItem'
import UnsubscribeModal from '../Modal/UnsubscribeModal'
import { colors } from '../../utils/styles'

function ChannelPreview({ subscription, navigation }) {
  const [isOpen, setModal] = useState(false)

  const { coach } = subscription

  const swipeBtns = [
    {
      text: 'delete',
      backgroundColor: colors.red,
      onPress: () => setModal(true),
    },
    {
      text: 'view',
      backgroundColor: colors.green,
      color: colors.black,
      onPress: () =>
        navigation.navigate('CoachProfile', {
          id: coach.id,
        }),
    },
  ]

  return (
    <>
      <Swipeout
        autoClose
        right={swipeBtns}
        backgroundColor="transparent"
        key={`channel-list-item--${subscription.id}`}
      >
        <ChannelPreviewItem {...subscription} navigation={navigation} />
      </Swipeout>
      <UnsubscribeModal
        isOpen={isOpen}
        closeModal={() => setModal(false)}
        subscription={subscription}
      />
    </>
  )
}

export default ChannelPreview
