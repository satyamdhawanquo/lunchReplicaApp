import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {titleLine,getDirection} from '../../../constants';
import ProfileImage from '../../ProfileImage';
import CardButton from '../CardButton';
import Location from '../../Location';
const CardContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleLine}>{titleLine}</Text>
      <View style={styles.roundImageContainer}>
        {[1, 2, 3, 4].map(() => (
          <ProfileImage />
        ))}
      </View>
      <View style={styles.cardFooter}>
        <Location />
        <CardButton text={getDirection} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 50,
    width: '70%',
  },
  titleLine: {
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 21,
  },
  roundImageContainer: {
    flexDirection: 'row',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: "center",
    marginTop: 23
  }
});

export default CardContent;
