import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import Modal from '../Modal'
import Button from '../../Button'

import { createSubscription } from '../../../actions/subscriptionsActions'
import styles, { colors } from '../../../utils/styles'

function SubscribeModal({
  id,
  name,
  avatar,
  closeModal,
  isOpen,
  dispatch,
  currentUser,
  goal_id,
  navigation,
}) {
  const subscribe = () => {
    dispatch(
      createSubscription(
        {
          coach_id: id,
          athlete_id: currentUser.id,
          goal_id,
        },
        navigation,
      ),
    )
  }

  return (
    <Modal visible={isOpen}>
      <View
        style={{
          background: colors.grey,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: colors.green,
          height: '100%',
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
          source={{
            uri: avatar,
          }}
        />
        <Text style={styles.header1}>Let's get started with {name}!</Text>
        <Text style={styles.header2}>
          Here's to taking a step towards greatness.
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Button title="Subscribe placeholder" onPress={subscribe} />
          <Button title="Go back" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  )
}

const msp = ({ session: { currentUser } }) => ({ currentUser })

export default connect(msp)(SubscribeModal)
