import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native'

import { logout } from '../../actions/sessionActions'
import styles, { colors } from '../../utils/styles'

class SideMenu extends Component {
  render() {
    const { navigation, logout } = this.props

    return (
      <SafeAreaView style={sideStyles.container}>
        <ScrollView>
          <Text style={styles.header1}>my account</Text>
          <View>
            <TouchableOpacity
              style={{ paddingVertical: 12, paddingHorizontal: 30 }}
              onPress={() => navigation.navigate('ChannelList')}
            >
              <Text style={styles.text}>my trainers</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ paddingVertical: 12, paddingHorizontal: 30 }}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.text}>my stats</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.header1, marginTop: 16 }}>explore</Text>
            <TouchableOpacity
              style={{ paddingVertical: 12, paddingHorizontal: 30 }}
              onPress={() => navigation.navigate('Coaches')}
            >
              <Text style={styles.text}>find coaches</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 12, paddingHorizontal: 30 }}
              onPress={() => navigation.navigate('Coaches')}
            >
              <Text style={styles.text}>set a goal</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity
            style={{ paddingVertical: 12, paddingHorizontal: 30 }}
            onPress={() => console.log('todo')}
          >
            <Text style={styles.text}>become a coach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingVertical: 12, paddingHorizontal: 30 }}
            onPress={() => logout(navigation)}
          >
            <Text style={styles.text}>log out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const sideStyles = {
  container: {
    backgroundColor: colors.green,
    paddingTop: 20,
    flex: 1,
  },
}

const mdp = dispatch => ({
  logout: navigation => dispatch(logout(navigation)),
})

export default connect(
  null,
  mdp,
)(SideMenu)
