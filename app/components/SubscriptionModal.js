import React from 'react'
import { connect } from 'react-redux'
import { Modal, View, Image, Text } from 'react-native'

import Button from './Button'
import styles from '../utils/styles'
import { createSubscription } from '../actions/subscriptionsActions'

const SubscriptionModal = ({ dispatch, athlete_id, avatar }) => (
  <Modal>
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
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
      </View>
      <View>
        <Text style={{ ...styles.header1 }}>Great choice!</Text>
        <Text style={styles.content}>
          We think you're going to get along with {name} just right. Cheers to
          another great step in your fitness journey! 🥂
        </Text>
        <Button
          title="apple pay subscription placeholder"
          onPress={() =>
            dispatch(
              createSubscription({
                coach_id,
                athlete_id,
                goal_id,
              }),
            )
          }
        />
      </View>
    </View>
  </Modal>
)

export default connect()(SubscriptionModal)
