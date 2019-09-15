import React from 'react'
import { Modal, View } from 'react-native'

export default ({ children, ...rest }) => (
  <Modal animationType="slide" transparent={false} {...rest}>
    <View style={{ marginTop: 48 }}>{children}</View>
  </Modal>
)
