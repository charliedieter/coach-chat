import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";

export default ({ navigation }) => (
  <TouchableOpacity onPress={navigation.toggleDrawer}>
    <Icon type="EvilIcons" name="navicon" style={{ height: 24, width: 24 }} />
  </TouchableOpacity>
);
