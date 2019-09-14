import React from 'react'
import { View, ActivityIndicator, StatusBar } from 'react-native'

export default () => (
  <View style={{ height: '100%', justifyContent: 'center' }}>
    <ActivityIndicator />
    <StatusBar barStyle="default" />
  </View>
)
