import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";
import { CLOSE_MODAL } from "../actions/types";

class ModalComponent extends Component {
  render() {
    const { modalOpen } = this.props;
    return (
      <Modal animationType="slide" transparent={false} visible={modalOpen}>
        <View style={{ marginTop: 48 }}>{this.props.children}</View>
      </Modal>
    );
  }
}

const msp = ({ ui: { modalOpen } }) => ({ modalOpen });

const mdp = dispatch => ({
  closeModal: () => dispatch({ type: CLOSE_MODAL })
});

export default connect(
  msp,
  mdp
)(ModalComponent);
