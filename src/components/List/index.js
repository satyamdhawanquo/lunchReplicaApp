/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,StyleSheet, ScrollView} from 'react-native';
import HorizontalCard from '../HorizontalCard';
const List = () => {
  return (
    <ScrollView style={styles.scrollView}>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20,
    }
});

export default List;
