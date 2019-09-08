import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import Icon from "../components/Icon";
import { getChatHistory, subscribeConversation } from "../actions/chatActions";
import { API_ROOT, HEADERS } from "../utils/constants";
import styles from "../utils/styles";

class ChannelScreen extends Component {
  state = {
    text: ""
  };

  componentDidMount() {
    const id = this.props.navigation.getParam("id");
    this.props.getChatHistory(id);
    this.props.subscribe(id);
  }

  onChangeText = text => this.setState({ text });

  send = async () => {
    const { text } = this.state;
    if (!text) return;
    const { currentUser } = this.props;

    const id = this.props.navigation.getParam("id");
    const body = JSON.stringify({
      message: { text, coaching_id: id, author_id: currentUser.id }
    });
    await fetch(`${API_ROOT}/messages`, {
      method: "POST",
      headers: HEADERS,
      body
    });

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    const { messages, currentUser } = this.props;
    const coach = this.props.navigation.getParam("coach");
    return (
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            justifyContent: "space-between"
          }}
        >
          <ScrollView style={{ height: "94%" }}>
            {messages.length ? (
              messages.map(m => {
                const isMine = m.author_id === currentUser.id;
                return (
                  <View
                    key={m.id}
                    style={{
                      flexDirection: isMine ? "row-reverse" : "row",
                      alignItems: "center",
                      paddingVertical: 4,
                      paddingHorizontal: 8
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                      source={{
                        uri: isMine ? "" : coach.avatar
                      }}
                    />
                    <Text style={{ marginHorizontal: 12 }}>{m.text}</Text>
                  </View>
                );
              })
            ) : (
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 80, height: 80, borderRadius: 40 }}
                  source={{
                    uri: coach.avatar
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
              flexDirection: "row",
              alignItems: "center",
              height: "6%"
            }}
          >
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 30,
                padding: 10,
                flex: 1
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
    );
  }
}

const msp = ({ session: { currentUser }, messages }) => ({
  currentUser,
  messages
});

const mdp = dispatch => ({
  subscribe: id => dispatch(subscribeConversation(id)),
  getChatHistory: id => dispatch(getChatHistory(id))
});

export default connect(
  msp,
  mdp
)(ChannelScreen);
