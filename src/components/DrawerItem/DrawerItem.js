import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import style from './style';

const DrawerItem = ({title, imageSource, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.buttonContainer}>
        <Text style={style.buttonText}>{title}</Text>
        <Image source={imageSource} style={style.image} />
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({});
