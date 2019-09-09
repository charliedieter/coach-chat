import React, { PureComponent } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Swipeout from "react-native-swipeout";

import Icon from "../components/Icon";
import ChannelPreview from "../components/ChannelPreview";
import styles from "../utils/styles";

class ChannelListScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Train",
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="chat-bubble-outline"
        type="MaterialIcons"
        style={{ height: 24, width: 24, color: "#000" }}
      />
    ),
    headerRight: (
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon
          type="MaterialCommunityIcons"
          name="hamburger"
          style={{ height: 24, width: 24 }}
        />
      </TouchableOpacity>
    ),
    headerTitle: (
      <Text
        style={{
          width: "100%",
          fontSize: 28,
          textAlign: "center",
          fontFamily: "Montserrat_black"
        }}
      >
        your trainers
      </Text>
    )
  });

  componentDidUpdate(p) {
    if (!this.props.currentUser) {
      this.props.navigation.navigate("AuthLoading");
    }
  }

  render() {
    const { currentUser } = this.props;

    if (!currentUser) return null;

    const { subscriptions } = currentUser;
    let swipeBtns = [
      {
        text: "Delete",
        backgroundColor: "red",
        onPress: () => {
          console.log("hi");
        }
      }
    ];

    return (
      <ScrollView>
        <View style={{ display: "flex", height: "100%" }}>
          {Object.values(subscriptions).map(subscription => (
            <Swipeout
              right={swipeBtns}
              backgroundColor="transparent"
              key={`channel-list-item--${subscription.id}`}
            >
              <ChannelPreview
                {...subscription}
                navigation={this.props.navigation}
              />
            </Swipeout>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const msp = ({ session: { currentUser } }) => ({ currentUser });

export default connect(
  msp,
  null
)(ChannelListScreen);
