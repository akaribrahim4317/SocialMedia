import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const StatIcon = ({icon, color, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.userPostStatButtonRight}>
        <FontAwesomeIcon icon={icon} color={color} />
      </View>
    </Pressable>
  );
};

export default StatIcon;

const styles = StyleSheet.create({
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatText: {marginLeft: horizontalScale(3), color: '#79869f'},
});
