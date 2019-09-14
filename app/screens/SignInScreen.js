// https://reactnavigation.org/docs/en/auth-flow.html
import React, { Component } from "react";
import { connect } from "react-redux";
import { SafeAreaView, View, Text } from "react-native";

import styles, { colors } from "../utils/styles";
import { login } from "../actions/sessionActions";
import Button from "../components/Button";

const googleIcon = {
  uri:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png"
};

class SignInScreen extends Component {
  componentDidUpdate(p) {
    if (this.props.currentUser) {
      this.props.navigation.navigate("AuthLoading");
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.primaryPage}>
        <View>
          <Button
            onPress={() => this.props.login(navigation)}
            title="Sign in with Google"
            icon={googleIcon}
          />
          <View
            style={{
              marginTop: 32,
              marginBottom: 16
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 18, fontWeight: "500" }}
            >
              Experienced trainer?
            </Text>
          </View>

          <Button title="Apply to be a coach" />
        </View>
      </SafeAreaView>
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
