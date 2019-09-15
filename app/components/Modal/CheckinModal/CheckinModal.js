import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import Modal from '../Modal'
import Button from '../../Button'

function DailyCheckinModal({ closeModal, isOpen, navigation }) {
  return (
    <Modal visible={isOpen}>
      <View style={{ marginVertical: 20 }}>
        <Button title="Subscribe placeholder" />
        <Button title="Go back" onPress={closeModal} />
      </View>
    </Modal>
  )
}

const msp = ({ session: { currentUser } }) => ({ currentUser })

export default connect(msp)(DailyCheckinModal)
