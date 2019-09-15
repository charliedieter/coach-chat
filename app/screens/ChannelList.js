import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, ScrollView, Text } from 'react-native'

import DrawerIcon from '../components/DrawerIcon'
import Button from '../components/Button'
import ChannelPreview from '../components/ChannelPreview'
import styles from '../utils/styles'

class ChannelListScreen extends PureComponent {
  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.navigation.navigate('AuthLoading')
    }
  }

  render() {
    const { navigation, subscriptions } = this.props
    const hasSubs = Object.keys(subscriptions).length

    return (
      <SafeAreaView style={styles.container}>
        {hasSubs ? (
          <ScrollView style={{ height: '100%' }}>
            {Object.values(subscriptions).map(subscription => {
              if (!subscription) return null

              return (
                <ChannelPreview
                  key={subscription.id}
                  subscription={subscription}
                  navigation={navigation}
                />
              )
            })}
          </ScrollView>
        ) : (
          <View style={{ ...styles.primaryPage, height: '100%', padding: 48 }}>
            <Text style={styles.header1}>
              Looks like you need to find a coach.
            </Text>
            <Button
              title="Get started"
              onPress={() => navigation.navigate('GoalList')}
            />
          </View>
        )}
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

const msp = ({ subscriptions }) => ({
  subscriptions,
})

export default connect(msp)(ChannelListScreen)
