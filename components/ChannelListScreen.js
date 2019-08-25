import React, { PureComponent } from "react";
import { View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import { Avatar, Chat, IconBadge } from "stream-chat-expo";
import { LinearGradient } from "expo-linear-gradient";
import { Container, Content, Text } from "native-base";
import Icon from "./Icon";
import chatClient from "../utils/chatClient";
import { gradients } from "../utils/styles";
import styles from "../utils/styles";

// class ChannelPreview extends PureComponent {
//   channelPreviewButton = React.createRef();

//   onSelectChannel = () => {
//     this.props.setActiveChannel(this.props.channel);
//   };

//   render() {
//     const { channel } = this.props;
//     const unreadCount = channel.countUnread();

//     return (
//       <TouchableOpacity
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           borderBottomColor: "#EBEBEB",
//           borderBottomWidth: 1,
//           padding: 20
//         }}
//         onPress={this.onSelectChannel}
//       >
//         <Avatar image={channel.data.image} size={80} />
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             flex: 1,
//             paddingLeft: 10
//           }}
//         >
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between"
//             }}
//           >
//             <Text
//               style={{
//                 fontWeight: unreadCount > 0 ? "bold" : "normal",
//                 fontSize: 14,
//                 flex: 9
//               }}
//               ellipsizeMode="tail"
//               numberOfLines={1}
//             >
//               {channel.data.name}
//             </Text>
//             <IconBadge unread={unreadCount} showNumber>
//               <Text
//                 style={{
//                   color: "#767676",
//                   fontSize: 11,
//                   flex: 3,
//                   textAlign: "right"
//                 }}
//               >
//                 {this.props.latestMessage.created_at}
//               </Text>
//             </IconBadge>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

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

class SportPreview extends PureComponent {
  channelPreviewButton = React.createRef();
  // onSelectSport = () => {
  //   this.props.setActiveChannel(this.props.channel);
  // };

  render() {
    return goals.map(({ name, icon }) => (
      <TouchableOpacity
        key={`sport-list--${name}`}
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
      <LinearGradient colors={gradients.primary} style={{ width: "100%" }}>
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
      </LinearGradient>
    )
  });

  render() {
    return (
      <LinearGradient colors={gradients.secondary} style={{ padding: 20, width: "100%" }}>
        <SafeAreaView>
          <Chat client={chatClient}>
            <View style={{ display: "flex", height: "100%" }}>
              <SportPreview />
            </View>
          </Chat>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
