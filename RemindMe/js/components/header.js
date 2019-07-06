import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>
        {props.headerText}
      </Text>
    </View>
  )
};


const styles = {
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 90,
    paddingTop: 27,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,

  },
  headerText: {
    fontSize: 22,
  }
}



export default Header;
