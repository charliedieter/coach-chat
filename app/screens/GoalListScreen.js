import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { Text } from "native-base";

import Icon from "../components/Icon";
import styles from "../utils/styles";

class GoalsListScreen extends PureComponent {
  state = {};

  static navigationOptions = () => ({
    headerTitle: <Text style={styles.header1}>what is your goal?</Text>
  });

  render() {
    const { goals } = this.props;
    return (
      <SafeAreaView>
        <View style={{ display: "flex", height: "100%" }}>
          {goals &&
            goals.map(({ id, name, icon_name, icon_type }) => (
              <TouchableOpacity
                key={`Goal--${name}`}
                style={styles.listItem}
                onPress={() =>
                  this.props.navigation.navigate("CoachList", {
                    goal_id: id,
                    name
                  })
                }
              >
                <Icon type={icon_type} name={icon_name} size={10} />
                <Text style={{ ...styles.header2, marginLeft: 10 }}>
                  {name}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </SafeAreaView>
    );
  }
}

const msp = ({ goals }) => {
  return {
    goals
  };
};

export default connect(msp)(GoalsListScreen);
