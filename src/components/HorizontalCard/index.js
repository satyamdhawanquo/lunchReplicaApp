/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
const HorizontalCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageBack}>
          <Text style={styles.day}>Today</Text>
          <Text style={styles.time}>2 PM</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.top}>
            <Text style={styles.resLine}>Connect Over Pizza</Text>
            <Text style={styles.spots}>2 spots left</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomLineWithOutPadding}>Lunch with Matt Demon</Text>
            <View style={styles.bottomLineWithImage}>
              <Image source={require('../../../assets/images/location/location-in-card.png')} />
              <Text style={styles.bottomLine}>Onley Avenue</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 110,
    width: '97%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowOffset: {height: 2, width: 14},
    padding: 16,
    margin: 8,
  },
  imageBack: {
    height: 78,
    width: 84,
    borderRadius: 8,
    backgroundColor: '#F6F8FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  day: {
    color: '#4F5056',
    fontFamily: 'Open Sans',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 14,
  },
  time: {
    letterSpacing: 0,
    lineHeight: 14,
    fontSize: 10,
    color: '#4F5056',
  },
  spots: {
    color: '#CD4242',
    fontFamily: 'Open Sans Regular',
    fontSize: 10,
    letterSpacing: 0,
    lineHeight: 12,
  },
  resLine: {
      height: 18,
      width: 130,
      color: '#10111C',
      fontFamily: "Open Sans SemiBold",
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 18,
  },
  bottomLine: {
      color: '#4F5056',
      fontFamily: "Open Sans Regular",
      fontSize: 10,
      letterSpacing: 0,
      lineHeight: 10,
      paddingLeft: 5
  },
  bottomLineWithOutPadding: {
      color: '#4F5056',
      fontFamily: "Open Sans Regular",
      fontSize: 10,
      letterSpacing: 0,
      lineHeight: 10,
  },
  bottomLineWithImage: {
    flexDirection: "row",
    marginTop: 6
  }
});

export default HorizontalCard;
