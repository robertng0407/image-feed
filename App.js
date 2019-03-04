import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Constants } from 'expo';

import Card from './src/components/Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          fullname="Robert Nguyen"
          linkText={"Comments"}
          onPressLinkText={() => console.log('Pressed link!')}
          image={{uri: 'https://unsplash.it/600/600'}}
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
