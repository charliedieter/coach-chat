import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, Button, Text, Image } from 'react-native'
import { logout } from '../actions/sessionActions'
import DrawerIcon from '../components/DrawerIcon'

class UserProfile extends Component {
  componentDidUpdate() {
    if (this.props.currentUser) {
      this.props.navigation.navigate('AuthLoading')
    }
  }

  render() {
    const { navigation, currentUser } = this.props

    if (!currentUser) return null

    const { avatar, name } = currentUser
    return (
      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
          source={{
            uri: avatar,
          }}
        />
        <Button title="log out" onPress={() => this.props.logout(navigation)} />
      </SafeAreaView>
    )
  }
}

UserProfile.navigationOptions = ({ navigation }) => ({
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
      me
    </Text>
  ),
})
const msp = ({ session: { currentUser } }) => ({ currentUser })

const mdp = dispatch => ({
  logout: navigation => dispatch(logout(navigation)),
})

export default connect(
  msp,
  mdp,
)(UserProfile)
