import {Pressable, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {horizontalScale} from '../../assets/styles/scaling';

const Button = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={style.button}>
        <Text style={style.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0150EC',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    padding: horizontalScale(5),
    marginHorizontal: 26,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 14,
  },
});
