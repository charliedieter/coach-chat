import React, { Component } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";

import Icon from "../components/Icon";
import styles from "../utils/styles";

const fakeCoaches = [
  {
    id: 0,
    name: "steve",
    location: "NYC",
    avatar: "url"
  }
];

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    const goal = navigation.getParam("name");
    return {
      headerTitle: <Text style={styles.header1}>{goal} coaches</Text>
    };
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{ display: "flex", height: "100%" }}>
          {fakeCoaches.map(({ id, name, avatar }) => (
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
                this.props.navigation.navigate("CoachProfile", {
                  id,
                  coach: fakeCoaches[id]
                })
              }
            >
              <Text style={{ ...styles.header2, marginLeft: 10 }}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
