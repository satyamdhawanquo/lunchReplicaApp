import React from 'react';
import {View, Text, ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
const Header = ({children}) => {
    return (
        <ImageBackground source={require('../../../assets/images/headerBackgroundImage/header-image.png')} style={styles.headerContainer}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width:'100%',
        resizeMode:"contain",
        justifyContent:"center",
        height: 300
    }
});

export default Header;