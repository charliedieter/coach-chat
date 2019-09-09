// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, TextInput, TouchableOpacity, Text } from "react-native";

import styles from "../utils/styles";
import { login } from "../actions/sessionActions";
import GoogleSignInButton from "../components/GoogleSignInButton";

class SignInScreen extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  componentDidUpdate(p) {
    if (this.props.currentUser) {
      this.props.navigation.navigate("AuthLoading");
    }
  }

  render() {
    const { navigation } = this.props;
    const { name, password } = this.state;

    return (
      <View style={styles.container2}>
        <View style={styles.content}>
          <TextInput
            value={name}
            onChangeText={text => this.handleChange("name", text)}
            style={styles.input}
          />
        </View>
        <View style={styles.content}>
          <TextInput
            value={password}
            onChangeText={text => this.handleChange("password", text)}
            style={styles.input}
          />
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ ...styles.touchable, width: "100%", alignItems: "center" }}
          >
            <View style={styles.content}>
              <Text style={styles.text}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <GoogleSignInButton onPress={() => this.props.login(navigation)}>
            Sign in with Google
          </GoogleSignInButton>
          <Button title="Apply to be a coach" />
        </View>
      </View>
    );
  }
}

const msp = ({ session: { currentUser } }) => ({ currentUser });

const mdp = dispatch => ({
  login: navigation => dispatch(login(navigation))
});

export default connect(
  msp,
  mdp
)(SignInScreen);
