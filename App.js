import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { Constants } from 'expo';

import Feed from './src/screens/Feed';
import CommentInput from './src/components/CommentInput';

const items = [
  { id: 0, author: 'Rob' },
  { id: 1, author: 'Robert' }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Feed style={styles.feed} /> */}
        <CommentInput placeholder="comment"/>
      </View>
    );
  }
}

const platformVersion =
  Platform.OS === 'ios'
    ? parseInt(Platform.Version, 10)
    : Platform.version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  }
});
