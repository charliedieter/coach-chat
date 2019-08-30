import React, { PureComponent } from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Text } from "native-base";

import Icon from "../components/Icon";
import styles from "../utils/styles";

const goals = [
  {
    id: 1,
    name: "run",
    icon: {
      name: "running",
      type: "FontAwesome5"
    }
  },
  {
    id: 1,
    name: "bike",
    icon: {
      name: "bike",
      type: "MaterialCommunityIcons"
    }
  },
  {
    id: 1,
    name: "triathlon",
    icon: {
      name: "bike",
      type: "MaterialCommunityIcons"
    }
  },
  {
    id: 1,
    name: "swim",
    icon: {
      name: "swimmer",
      type: "FontAwesome5"
    }
  },
  {
    id: 1,
    name: "strength training",
    icon: {
      name: "weight-pound",
      type: "MaterialCommunityIcons"
    }
  },
  {
    id: 1,
    name: "bodybuilding",
    icon: {
      name: "weight-pound",
      type: "MaterialCommunityIcons"
    }
  },
  {
    id: 1,
    name: "weight loss",
    icon: {
      name: "weight",
      type: "FontAwesome5"
    }
  }
];

export default class extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: <Text style={styles.header1}>what is your goal?</Text>
  });

  render() {
    return (
      <SafeAreaView>
        <View style={{ display: "flex", height: "100%" }}>
          {goals.map(({ name, icon }) => (
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
                this.props.navigation.navigate("CoachList", {
                  name
                })
              }
            >
              <Icon type={icon.type} name={icon.name} size={10} />
              <Text style={{ ...styles.header2, marginLeft: 10 }}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
