import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SafeAreaView,
  Button,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
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
  componentDidUpdate() {
    if (this.props.currentUser) {
      this.props.navigation.navigate("AuthLoading");
    }
  }

  render() {
    const { navigation, currentUser } = this.props;

    if (!currentUser) return null;

    const { avatar, name } = currentUser;
    return (
      <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 15
          }}
          source={{
            uri: avatar
          }}
        />
        <Button title="log out" onPress={() => this.props.logout(navigation)} />
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
