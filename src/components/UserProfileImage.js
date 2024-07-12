import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {horizontalScale} from '../../assets/styles/scaling';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View
      style={[
        styles.userImageContainer,
        {borderRadius: props.imageDimensions},
      ]}>
      <Image source={{uri: props.profileImage}} style={styles.image} />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;

const styles = StyleSheet.create({
  userImageContainer: {
    borderColor: '#f35bac',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: horizontalScale(3),
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
