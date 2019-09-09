import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Button
} from "react-native";

import styles from "../utils/styles";
import { API_ROOT } from "../utils/constants";

export default class extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => {
    const goal = navigation.getParam("name");
    return {
      headerTitle: <Text style={styles.header2}>{goal} coaches</Text>
    };
  };

  async componentDidMount() {
    const goal = this.props.navigation.getParam("name");
    const res = await fetch(
      `${API_ROOT}/coaches?goal=${encodeURIComponent(goal)}`
    );
    const { coaches } = await res.json();

    this.setState({ coaches });
  }

  render() {
    const { navigation } = this.props;
    const { coaches } = this.state;

    return (
      <ScrollView>
        <View style={{ display: "flex", height: "100%" }}>
          {coaches &&
            coaches.map(({ coach: { id, name, bio, avatar, ...rest } }) => {
              return (
                <TouchableOpacity
                  key={`Goal--${name}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottomColor: "#EBEBEB",
                    borderBottomWidth: 1,
                    padding: 20
                  }}
                  onPress={() =>
                    navigation.navigate("CoachProfile", {
                      id,
                      name,
                      goal_id: this.props.navigation.getParam("goal_id")
                    })
                  }
                >
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{ uri: avatar }}
                  />
                  <Text style={{ ...styles.header2, marginLeft: 10 }}>
                    {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    );
  }
}
