import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, ScrollView, Text } from 'react-native'

import DrawerIcon from '../components/DrawerIcon'
import ChannelPreview from '../components/ChannelPreview'
import styles from '../utils/styles'

class ChannelListScreen extends PureComponent {
  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.navigation.navigate('AuthLoading')
    }
  }

  render() {
    const {
      currentUser: { subscriptions },
      navigation,
    } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ height: '100%' }}>
          <View style={{ display: 'flex', height: '100%' }}>
            {Object.values(subscriptions).map(subscription => (
              <ChannelPreview
                key={subscription.id}
                subscription={subscription}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

ChannelListScreen.navigationOptions = ({ navigation }) => ({
  headerRight: <DrawerIcon navigation={navigation} />,
  headerTitle: (
    <Text
      style={{
        width: '100%',
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Montserrat_black',
      }}
    >
      your trainers
    </Text>
  ),
})

const msp = ({ session: { currentUser } }) => ({
  currentUser,
})

export default connect(msp)(ChannelListScreen)
