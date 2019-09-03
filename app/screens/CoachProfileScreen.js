import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, Button } from "react-native";
import styles from "../utils/styles";
import Modal from "../components/Modal";
import { OPEN_MODAL } from "../actions/types";
import { createSubscription } from "../actions/subscriptionsActions";

class CoachProfile extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => {
    const name = navigation.getParam("name");

    return {
      headerTitle: <Text style={styles.header2}>Meet {name}</Text>
    };
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam("id");
    const res = await fetch(`http://localhost:3000/coaches/${id}`);
    const { coach } = await res.json();
    this.setState({
      coach,
      coach_id: coach.id,
      goal_id: this.props.navigation.getParam("goal_id")
    });
  }

  componentDidUpdate() {
    const { currentUser } = this.props;
    const subscription = Object.values(currentUser.subscriptions).filter(
      ({ athlete_id, coach_id, goal_id }) =>
        this.state.goal_id === goal_id &&
        this.state.coach_id === coach_id &&
        this.props.currentUser.id === athlete_id
    )[0];

    if (subscription) {
      this.props.navigation.navigate("Channel", {
        subscription
      });
    }
  }

  render() {
    if (!this.state.coach) return null;
    const { goal_id, coach_id } = this.state;
    const { avatar, name, bio } = this.state.coach;
    const { openModal, navigation } = this.props;

    return (
      <View>
        <Image
          style={{
            width: "100%",
            height: "40%"
          }}
          source={{
            uri: avatar
          }}
        />
        <View>
          <Text style={{ ...styles.header1 }}>{name}</Text>
          <Text style={styles.content}>{bio}</Text>
          <Button title={`Start training with ${name}`} onPress={openModal} />
        </View>
        <Modal>
          <View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center"
              }}
            >
              <Image
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100
                }}
                source={{
                  uri: avatar
                }}
              />
            </View>
            <View>
              <Text style={{ ...styles.header1 }}>Great choice!</Text>
              <Text style={styles.content}>
                We think you're going to get along with {name} just right.
                Cheers to another great step in your fitness journey! 🥂
              </Text>
              <Button
                title="apple pay subscription placeholder"
                onPress={() =>
                  this.props.createSubscription({
                    coach_id,
                    athlete_id: this.props.currentUser.id,
                    goal_id
                  })
                }
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const msp = ({ session: { currentUser } }) => ({ currentUser });
const mdp = dispatch => ({
  openModal: () => dispatch({ type: OPEN_MODAL }),
  createSubscription: config => dispatch(createSubscription(config))
});

export default connect(
  msp,
  mdp
)(CoachProfile);
