import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './js/components/header.js';


export default class App extends Component<Props> {
  render() {
    return (
      <View>
      <Header headerText = {'Hi'}/>

      </View>
    );
  }
}
