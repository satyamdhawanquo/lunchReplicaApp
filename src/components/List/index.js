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
          {[1,2,3,4,5].map(()=>{
            return <HorizontalCard />
          })
        }
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
      scrollView: {
          marginHorizontal: 20,
      }
  });

  export default List;
