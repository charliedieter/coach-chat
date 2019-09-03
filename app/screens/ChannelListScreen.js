import React, { PureComponent } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import Icon from "../components/Icon";
import styles from "../utils/styles";

class ChannelPreview extends PureComponent {
  onSelectChannel = () => {
    const { id } = this.props;
    this.props.navigation.navigate("Channel", {
      id
    });
  };

  render() {
    const {
      coach,
      goal: { icon_name, icon_type }
    } = this.props;

    return (
      <TouchableOpacity onPress={this.onSelectChannel} style={styles.listItem}>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                marginBottom: 4
              }}
              source={{ uri: coach.avatar }}
            />
            <Text style={{ fontSize: 20 }}>{coach.name}</Text>
          </View>
          <Icon name={icon_name} type={icon_type} />
        </View>
      </TouchableOpacity>
    );
  }
}

class ChannelListScreen extends PureComponent {
  static navigationOptions = () => ({
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

  render() {
    const {
      currentUser: { name, subscriptions }
    } = this.props;

    return (
      <ScrollView>
        <View style={{ display: "flex", height: "100%" }}>
          {Object.values(subscriptions).map(subscription => (
            <ChannelPreview
              key={`channel-list-item--${subscription.id}`}
              {...subscription}
              navigation={this.props.navigation}
            />
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
