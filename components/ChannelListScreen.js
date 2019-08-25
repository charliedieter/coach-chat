import React, { PureComponent } from "react";
import { View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { Avatar, Chat, ChannelList, IconBadge } from "stream-chat-expo";

import chatClient from "../utils/chatClient";

class CustomChannelPreview extends PureComponent {
  channelPreviewButton = React.createRef();

  onSelectChannel = () => {
    this.props.setActiveChannel(this.props.channel);
  };

  render() {
    const { channel } = this.props;
    const unreadCount = channel.countUnread();

    return (
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottomColor: "#EBEBEB",
          borderBottomWidth: 1,
          padding: 20
        }}
        onPress={this.onSelectChannel}
      >
        <Avatar image={channel.data.image} size={80} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingLeft: 10
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontWeight: unreadCount > 0 ? "bold" : "normal",
                fontSize: 14,
                flex: 9
              }}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {channel.data.name}
            </Text>
            <IconBadge unread={unreadCount} showNumber>
              <Text
                style={{
                  color: "#767676",
                  fontSize: 11,
                  flex: 3,
                  textAlign: "right"
                }}
              >
                {this.props.latestMessage.created_at}
              </Text>
            </IconBadge>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class Hiya extends PureComponent {
  render() {
    return <Text style={{ fontSize: 28, fontWeight: "bold", padding: 34 }}>Your trainers</Text>;
  }
}

export default class ChannelListScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: <Text style={{ fontSize: 28, fontWeight: "bold", padding: 34 }}>Your trainers</Text>
  });

  render() {
    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <View style={{ display: "flex", height: "100%", padding: 10 }}>
            <ChannelList
              filters={{ type: "messaging", members: { $in: ["fancy-heart-6"] } }}
              sort={{ last_message_at: -1 }}
              Preview={CustomChannelPreview}
              onSelect={channel => {
                this.props.navigation.navigate("Channel", {
                  channel
                });
              }}
            />
          </View>
        </Chat>
      </SafeAreaView>
    );
  }
}
