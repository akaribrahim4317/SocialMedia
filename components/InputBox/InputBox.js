import {StyleSheet, ScrollView, TextInput, View} from 'react-native';
import style from './style';
import React from 'react';

const InputBox = ({placeholder, value, setValue, keyboardType}) => {
  return (
    <ScrollView>
      <TextInput
        style={style.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        keyboardType={keyboardType}
      />
    </ScrollView>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
