import React, { Component, PureComponent } from 'react';
import { OAuthRedirect, URLSchemes } from 'expo-app-auth';
import * as Constants from 'expo-constants';
import * as GoogleSignIn from 'expo-google-sign-in';
import { Image, Text, View, Platform } from 'react-native';
import styles from '../utils/styles';

import GoogleSignInButton from './GoogleSignInButton';

const isInClient = Constants.appOwnership === 'expo';
if (isInClient) {
  GoogleSignIn.allowInClient();
}

const clientIdForUseInTheExpoClient =
  '592462264930-t012p9ntbdalojr5vvmkmfpb99m2lr1t.apps.googleusercontent.com';

const yourClientIdForUseInStandalone = Platform.select({
  android:
    '592462264930-v6gb5885nlhoh5vgu1lu91pnfiftto4g.apps.googleusercontent.com',
  ios:
    '592462264930-t012p9ntbdalojr5vvmkmfpb99m2lr1t.apps.googleusercontent.com',
});

const clientId = isInClient
  ? clientIdForUseInTheExpoClient
  : yourClientIdForUseInStandalone;

export default class extends Component {
  state = { user: null };

  async componentDidMount() {
    try {

      await GoogleSignIn.initAsync({
        isOfflineEnabled: true,
        isPromptEnabled: true,
        clientId,
      });
      this._syncUserWithStateAsync();
    } catch ({ message }) {
      alert('GoogleSignIn.initAsync(): ' + message);
    }
  }

  _syncUserWithStateAsync = async (u = null) => {
    const user = u || await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };

  signOutAsync = async () => {
    try {
      await GoogleSignIn.signOutAsync();
      this.setState({ user: null });
    } catch ({ message }) {
      alert('signOutAsync: ' + message);
    }
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync(user);
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  _syncUserWithStateAsync = async () => {
    const data = await GoogleSignIn.signInSilentlyAsync();
    if (data) {
      const photoURL = await GoogleSignIn.getPhotoAsync(256);
      const user = await GoogleSignIn.getCurrentUserAsync();
      this.setState({
        user: {
          ...user.toJSON(),
          photoURL: photoURL || user.photoURL,
        },
      });
    } else {
      this.setState({ user: null });
    }
  };

  get buttonTitle() {
    return this.state.user ? 'Sign-Out of Google' : 'Sign-In with Google';
  }

  render() {
    const scheme = {
      OAuthRedirect,
      URLSchemes,
    };
    const { user } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {user && <GoogleProfile {...user} />}
        <GoogleSignInButton onPress={this._toggleAuth}>
          {this.buttonTitle}
        </GoogleSignInButton>
        <Text>AppAuth: {JSON.stringify(scheme, null, 2)}</Text>
      </View>
    );
  }

  _toggleAuth = () => {
    if (this.state.user) {
      this._signOutAsync();
    } else {
      this._signInAsync();
    }
  };

  _signOutAsync = async () => {
    try {
      await GoogleSignIn.signOutAsync();
    } catch ({ message }) {
      console.error('Demo: Error: logout: ' + message);
    } finally {
      this.setState({ user: null });
    }
  };

  _signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      console.error('login: Error:' + message);
    }
  };
}

class GoogleProfile extends PureComponent {
  render() {
    const { photoURL, displayName, email } = this.props;
    return (
      <View style={styles.container}>
        {photoURL && (
          <Image
            source={{
              uri: photoURL,
            }}
            style={styles.image}
          />
        )}
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.text}>{displayName}</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>
    );
  }
}

