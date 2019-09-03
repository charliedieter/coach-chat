import React, { Component } from "react";
import { connect } from "react-redux";
import { View, SafeAreaView, Text } from "react-native";

class ChannelScreen extends Component {
  render() {
    return <SafeAreaView></SafeAreaView>;
  }
}

const msp = ({ session: { currentUser } }) => ({
  currentUser
});

export default connect(msp)(ChannelScreen);
