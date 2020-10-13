import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Card = () => {
  return (
    <Image source={require('../../../assets/images/card/lunch-blue-card.png')} style={styles.card}>

    </Image>
  );
};


const styles = StyleSheet.create({
    card: {
        width: '90%',
        marginTop: 50,
        height: 190,
        resizeMode:"contain",
        alignSelf:"center"
    }
});

export default Card;
