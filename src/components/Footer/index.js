  import React from 'react';
  import {View, Image, StyleSheet} from 'react-native';
  import PropTypes from 'prop-types';

  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
          <Image source={require('../../../assets/images/footerImages/all-lunches-selected.png')} />
          <Image source={require('../../../assets/images/footerImages/my-lunches-selected.png')} />
          <Image source={require('../../../assets/images/footerImages/create-lunch.png')} />
          <Image source={require('../../../assets/images/footerImages/Notification-1.png')} />
          <Image source={require('../../../assets/images/footerImages/profile-3.png')} />
      </View>
    );
  };

  Footer.protoTypes = {
      tabs: PropTypes.arrayOf(PropTypes.object)
  }

  const styles = StyleSheet.create({
      footerContainer: {
          justifyContent: "space-around",
          width: '100%',
          height: 58,
          alignItems:'center',
          flexDirection: 'row',
          backgroundColor: '#EFF3F6'
      }
  });

  export default Footer;
