import {Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const ProfileTabTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocuced]}>
      {props.title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
