
import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,

} from 'stream-chat-expo';

import chatClient from '../utils/chatClient'

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    const channel = navigation.getParam('channel');
    return {
      headerTitle: (
        <Text style={{ fontWeight: 'bold' }}>{channel.data.name}</Text>
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    const channel = navigation.getParam('channel');

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel client={chatClient} channel={channel}>
            <View style={{ display: 'flex', height: '100%' }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView >
    );
  }
}
