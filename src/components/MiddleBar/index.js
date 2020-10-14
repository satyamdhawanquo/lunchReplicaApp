    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     * @flow strict-local
     */

    import React, { Children } from 'react';
    import {View,StyleSheet, Text, Image} from 'react-native';
    import {lunchesNearYou} from '../../constants';
    const MiddleBar = () => {
    return (
        <View style={styles.middleBarContainer}>
            <Text style={styles.bold}>{lunchesNearYou}</Text>
            <Image source={require('../../../assets/images/middleRow/search-white.png')} />
        </View>
    );
    };


    const styles = StyleSheet.create({
        middleBarContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 25,
            marginBottom: 12
        },
        bold: {
            color: '#10111C',
            fontFamily: "Circular Std",
            fontSize: 16,
            fontWeight: "500",
            letterSpacing: 0,
            lineHeight: 14,
        }
    });

    export default MiddleBar;
