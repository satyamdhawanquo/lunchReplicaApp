  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */

  import React from 'react';
  import Footer from './src/components/Footer'
  import Header from './src/components/Header'
  import Card from './src/components/Card';
  import MiddleBar from './src/components/MiddleBar'
  import List from './src/components/List';
  import TopBar from './src/components/TopBar';
  import {View,StyleSheet} from 'react-native';
  const App = () => {
    return (
      <>
      <View style={styles.container}>
        <Header>
          <TopBar />
          <Card />
        </Header>
        <MiddleBar />
        <List />
        <View style={styles.footer}>
          <Footer/>
        </View>
      </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex:1, 
      justifyContent:"space-between",
      backgroundColor: '#EFF3F6'
    },
    footer: {
      justifyContent: "flex-end"
    }
  });

  export default App;
