import React, { PureComponent } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/styles'

export default ({ children, style, icon, title, ...rest }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={StyleSheet.flatten([buttonStyles.touchable, style])}
    {...props}
  >
    <View style={buttonStyles.content}>
      {icon && <Image source={icon} style={{ width: 24, aspectRatio: 1 }} />}
      {title && <Text style={buttonStyles.text}>{title}</Text>}
    </View>
  </TouchableOpacity>
)

const buttonStyles = {
  touchable: {
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 1 },
    overflow: 'visible',
    shadowColor: colors.black,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.grey,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    color: colors.black,
    fontSize: 16,
    marginHorizontal: 10,
  },
}
