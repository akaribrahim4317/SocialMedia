import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {getFontFamily} from '../../../assets/fonts/helper';
import {scaleFontSize, verticalScale} from '../../../assets/styles/scaling';

const UserStory = ({firstName, profileImage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: profileImage}} style={styles.image} />
      </View>
      <Text style={styles.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};

export default UserStory;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  imageContainer: {
    borderWidth: 0.5,
    borderColor: '#f35bac',
    borderRadius: 40,
    padding: 2,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});
