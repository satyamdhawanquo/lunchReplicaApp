import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import CardTag from './CardTag';
import CardContent from './CardContent';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/card/lunch-blue-card.png')}
        style={styles.card}></Image>
      <CardTag time={`Attending Today, 2PM`} />
      <CardContent />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    marginTop: 10,
    height: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    position: 'relative',
  },
});

export default Card;
