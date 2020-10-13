/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet,Image, Text} from 'react-native';
const HorizontalCard = () => {
  return (
    <>
      <View style={styles.container}>
          {/* <View style={styles.horizontalCard}> */}
            <View style={styles.imageBack}>
              <Text>Today 2 pm</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.top}>
                    <Text>Connect Over Pizza</Text>
                    <Text>2 spots left</Text>
                </View>
                <View style={styles.bottom}>
                    <Text>Lunch with Matt Demon</Text>
                    <Text>Onley Avenue</Text>
                </View>
            </View>
          {/* </View> */}
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
    margin: 8
  },
  imageBack: {
        height: 78,
        width: 84,
        borderRadius: 8,
        backgroundColor: '#F6F8FB',
        justifyContent:"center",
        alignItems:"center",
  },
  rightContainer: {
      flexDirection:"column",
      justifyContent: "space-between",
      marginLeft: 16
  }
//   horizontalCard: {
//       flexDirection: "row"
//   }
});

export default HorizontalCard;
