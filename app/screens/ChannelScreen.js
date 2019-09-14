import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'

import DrawerIcon from '../components/DrawerIcon'

import Icon from '../components/Icon'
import Loader from '../components/Loader'
import {
  getChatHistory,
  subscribeConversation,
  unsubscribeConversation,
} from '../actions/chatActions'
import { CLEAR_MESSAGES } from '../actions/types'
import { API_ROOT, HEADERS } from '../utils/constants'
import styles from '../utils/styles'

class ChannelScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <DrawerIcon navigation={navigation} />,
  })

  state = {
    text: '',
    id: null,
  }

  componentDidMount() {
    console.log(this.props)
    const id = this.props.navigation.getParam('id')
    this.setState({ id }, () => this.props.getChatHistory(id))
  }

  componentWillUnmount() {
    this.props.clearMessages()
    this.props.unsubscribe(this.state.id)
  }

  onChangeText = text => this.setState({ text })

  send = async () => {
    const { text } = this.state
    if (!text) return
    const { currentUser } = this.props

    const id = this.props.navigation.getParam('id')
    const body = JSON.stringify({
      message: { text, coaching_id: id, author_id: currentUser.id },
    })

    await fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body,
    })

    this.setState({ text: '' })
  }

  render() {
    if (this.props.isLoading) return <Loader />

    const { text } = this.state
    const { messages, currentUser } = this.props
    const coach = this.props.navigation.getParam('coach')

    return (
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            justifyContent: 'space-between',
          }}
        >
          <ScrollView
            style={{ height: '94%' }}
            ref={ref => (this.scrollView = ref)}
            onContentSizeChange={(contentWidth, contentHeight) => {
              this.scrollView.scrollToEnd({ animated: true })
            }}
          >
            {messages.length ? (
              messages.map(m => {
                const isMine = m.author_id === currentUser.id
                return (
                  <View
                    key={m.id}
                    style={{
                      flexDirection: isMine ? 'row-reverse' : 'row',
                      alignItems: 'center',
                      paddingVertical: 4,
                      paddingHorizontal: 8,
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                      source={{
                        uri: isMine ? currentUser.avatar : coach.avatar,
                      }}
                    />
                    <Text style={{ marginHorizontal: 12 }}>{m.text}</Text>
                  </View>
                )
              })
            ) : (
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{ width: 80, height: 80, borderRadius: 40 }}
                  source={{
                    uri: coach.avatar,
                  }}
                />
                <Text style={styles.header1}>
                  {`This is the start of your conversation with ${coach.name}`}
                </Text>
              </View>
            )}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '6%',
            }}
          >
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 30,
                padding: 10,
                flex: 1,
              }}
              onChangeText={this.onChangeText}
              value={text}
            />
            <TouchableOpacity style={{ marginLeft: 12 }} onPress={this.send}>
              <Icon name="send" type="MaterialCommunityIcons" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const msp = ({ session: { currentUser }, messages, ui: { isLoading } }) => ({
  currentUser,
  messages,
  isLoading,
})

const mdp = dispatch => ({
  subscribe: id => dispatch(subscribeConversation(id)),
  unsubscribe: id => dispatch(unsubscribeConversation(id)),
  getChatHistory: id => dispatch(getChatHistory(id)),
  clearMessages: () => dispatch({ type: CLEAR_MESSAGES }),
})

export default connect(
  msp,
  mdp,
)(ChannelScreen)
