import React, { PureComponent } from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Chat } from "stream-chat-expo";
import { Text } from "native-base";

import Icon from "../components/Icon";
import chatClient from "../utils/chatClient";
import { gradients } from "../utils/styles";
import styles from "../utils/styles";

const goals = [
  {
    name: "run",
    icon: {
      name: "running",
      type: "FontAwesome5"
    }
  },
  {
    name: "bike",
    icon: {
      name: "bike",
      type: "MaterialCommunityIcons"
    }
  },
  {
    name: "triathlon",
    icon: {
      name: "bike",
      type: "MaterialCommunityIcons"
    }
  },
  {
    name: "swim",
    icon: {
      name: "swimmer",
      type: "FontAwesome5"
    }
  },
  {
    name: "strength training",
    icon: {
      name: "weight-pound",
      type: "MaterialCommunityIcons"
    }
  },
  {
    name: "bodybuilding",
    icon: {
      name: "weight-pound",
      type: "MaterialCommunityIcons"
    }
  },
  {
    name: "lose weight",
    icon: {
      name: "weight",
      type: "FontAwesome5"
    }
  }
];

class GoalPreview extends PureComponent {
  channelPreviewButton = React.createRef();

  render() {
    return goals.map(({ name, icon }) => (
      <TouchableOpacity
        key={`Goal-list--${name}`}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: "#EBEBEB",
          borderBottomWidth: 1,
          padding: 20
        }}
        onPress={this.onSelectChannel}
      >
        <Icon type={icon.type} name={icon.name} size={10} />
        <Text style={{ ...styles.header2, marginLeft: 10 }}>{name}</Text>
      </TouchableOpacity>
    ));
  }
}

export default class ChannelListScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: (
      <Text
        style={{
          width: "100%",
          fontSize: 28,
          color: "white",
          textAlign: "center",
          fontFamily: "Montserrat_black",
          padding: 10,
          paddingTop: 56,
          margin: 0
        }}
      >
        Your trainers
      </Text>
    )
  });

  render() {
    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <View style={{ display: "flex", height: "100%" }}>
            <GoalPreview />
          </View>
        </Chat>
      </SafeAreaView>
    );
  }
}
