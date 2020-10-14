  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */

  import React from 'react';
  import {View, StyleSheet, Text, Image} from 'react-native';
  const TopBar = () => {
    return (
      <>
        <View style={styles.topBarContainer}>
          <Text style={styles.locationText}>Buffalo, NY</Text>
          <View style={styles.menu}>
              <View style={styles.section1}>
              <Text style={styles.text}>All LW4IP</Text>
              <Image source={require('../../../assets/images/downArrow/right-arrow-small.png')} style={styles.arrow} />
              </View>
              <View>
              <Text style={styles.text}>L4Y Causes</Text>
              </View>
          </View>
        </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    topBarContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      backgroundColor: '#EFF3F6',
      flexDirection: 'row',
      zIndex: 200,
      backgroundColor: '#1E304D',
      fontFamily: 'Circular Std',
      color: '#FFFFFF'
    },
    footer: {
      justifyContent: 'flex-end',
    },
    locationText: {
      color: 'white',
      marginRight: 34,
      marginLeft: 16,
      fontFamily: 'Open Sans',
      fontSize: 10,
      letterSpacing: 0,
      lineHeight: 14,
      fontSize: 12
    },
    text: {
      color: 'white',
      fontFamily: 'Open Sans',
      fontSize: 10,
      letterSpacing: 0,
      lineHeight: 14,
      fontSize: 12,
    },
    section1: {
        alignItems:"center",
        justifyContent:"center",
        marginRight:20
    },
    menu: {
        flexDirection: "row",
    }
  });

  export default TopBar;
