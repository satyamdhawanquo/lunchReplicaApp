  import React from 'react';
  import {View, Text, StyleSheet} from 'react-native';

  const CardButton = ({text}) => {
    return (
      <View style={styles.cardButton}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    cardButton: {
      height: 25,
      width: 101,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      justifyContent:"center",
      alignItems:"center"
    },
    buttonText: {
          height: 10,
          width: 69,
          color: '#00A8FF',
          fontFamily: "Open Sans",
          fontSize: 10,
          letterSpacing: 0,
          lineHeight: 10,
    }
  });

  export default CardButton;
