import React, { Component } from "react";
import { Text } from "react-native";
import styles from "../utils/styles";

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    const coach = navigation.getParam("coach");
    return {
      headerTitle: <Text style={styles.header1}>{coach.name}</Text>
    };
  };

  render() {
    return null;
  }
}
