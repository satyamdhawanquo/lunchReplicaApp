import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {titleLine} from '../../../constants';
import ProfileImage from '../../ProfileImage';

const CardContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleLine}>{titleLine}</Text>
      <View style={styles.roundImageContainer}>
        {[1, 2, 3, 4].map((item) => (
          <ProfileImage />
        ))}
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
});

export default CardContent;
