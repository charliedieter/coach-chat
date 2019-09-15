import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Modal from '../Modal'
import Button from '../../Button'

import { archiveSubscription } from '../../../actions/subscriptionsActions'
import styles, { colors } from '../../../utils/styles'

function UnsubscribeModal({ subscription, closeModal, isOpen, dispatch }) {
  const { coach } = subscription

  return (
    <Modal visible={isOpen}>
      <View
        style={{
          background: colors.grey,
          justifyContent: 'center',
          padding: 20,
          backgroundColor: colors.green,
          height: '100%',
        }}
      >
        <Text style={styles.header1}>
          Are you sure you want to unsubscribe?
        </Text>
        <Text style={styles.header2}>
          You will always have a chance to pick back up where you left off
          training with {coach.name}, but the session will be archived for now.
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Button
            title="Unsubscribe"
            onPress={() => dispatch(archiveSubscription(subscription))}
          />
          <Button title="Go back" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  )
}

export default connect()(UnsubscribeModal)
