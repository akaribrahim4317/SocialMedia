import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const InputBox = ({
  placeholder,
  value,
  setValue,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={style.input}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputBox;

const style = StyleSheet.create({
  input: {
    borderWidth: 0.25,
    borderColor: '#022150',
    borderRadius: horizontalScale(10),
    padding: horizontalScale(10),
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Inter', '400'),
    color: '#022150',
    margin: 10,
  },
});
