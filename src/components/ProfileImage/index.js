import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileImage = () => {
  const alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const random = Math.floor(Math.random() * 26);
  return (
    <View style={styles.rounderContainer}>
      <Text style={styles.randomAlpha}>{`${alphabets[random]}`.toUpperCase()}</Text>
    </View>
  );
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const styles = StyleSheet.create({
  rounderContainer: {
    height: 27,
    width: 27,
    backgroundColor: getRandomColor(),
    borderRadius: 50,
    justifyContent:"center",
    alignItems:"center",
    margin:3
  },
  randomAlpha: {
    color: 'white',
    fontSize:16,
    fontFamily:"Open Sans"
  }
});

export default ProfileImage;
