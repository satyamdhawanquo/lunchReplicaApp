import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {location} from '../../constants';

const Location = () => {
    return (
        <View style={styles.locationContainer}>
            <Image source={require('../../../assets/images/location/location-in-header.png')} style={styles.locationImage}></Image>
            <Text style={styles.location}>{location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    locationContainer: {
        flexDirection: "row"
    },
    location: {
        color:'white',
        lineHeight: 14,
        paddingLeft: 5
    },
    locationImage: {

    }
});

export default Location;