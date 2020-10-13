import React from 'react';
import {View, Text, ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
const Header = ({children}) => {
    return (
        <ImageBackground resizeMethod="resize" resizeMode="cover" source={require('../../../assets/images/headerBackgroundImage/header-image.png')} style={styles.headerContainer}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width:'100%',
        justifyContent:"center",
        height: 300,
    }
});

export default Header;