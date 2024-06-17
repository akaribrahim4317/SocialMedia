import {Button, StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import style from './style';
import PropTypes from 'prop-types';
import {getFontFamily} from '../../assets/fonts/helper';

const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
