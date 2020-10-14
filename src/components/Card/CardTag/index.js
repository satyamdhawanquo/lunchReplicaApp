/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,StyleSheet, Text} from 'react-native';

const CardTag = ({time}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 19,
    width: 116,
    position: 'absolute',
    borderRadius: 8,
    backgroundColor: 'rgba(33,89,145, 0.2)',
    marginHorizontal:50,
    marginVertical:30,
    justifyContent:'center'
  },
  time: {
    fontFamily: "Open Sans",
    fontSize: 10,
    letterSpacing: 0,
    lineHeight: 10,
    color: '#FFFFFF'
  }
});

export default CardTag;

