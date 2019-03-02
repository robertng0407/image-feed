import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Constants } from 'expo';

import Avatar from './src/components/Avatar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          initials="RN"
          size={35}
          backgroundColor={'teal'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight
  },
});
