import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Constants } from 'expo';

import CardList from './src/components/CardList';

const items = [
  { id: 0, author: 'Rob' },
  { id: 1, author: 'Robert' }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items} />
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
