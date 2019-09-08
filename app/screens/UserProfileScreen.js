import React, { Component } from "react";
import { connect } from "react-redux";
import { SafeAreaView, Button, Text, TouchableOpacity } from "react-native";
import Icon from "../components/Icon";
import { logout } from "../actions/sessionActions";
import styles from "../utils/styles";

class UserProfile extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Profile",
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="person-outline"
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
        me
      </Text>
    )
  });

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          title="log out"
          onPress={() => this.props.logout(navigation)}
        ></Button>
      </SafeAreaView>
    );
  }
}
const msp = ({ session: { currentUser } }) => ({ currentUser });

const mdp = dispatch => ({
  logout: navigation => dispatch(logout(navigation))
});

export default connect(
  msp,
  mdp
)(UserProfile);
