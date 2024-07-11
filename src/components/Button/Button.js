import {Pressable, Text, View} from 'react-native';
import React from 'react';
import style from './style';

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
