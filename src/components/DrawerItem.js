import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

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

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    margin: 16,
  },
  image: {
    height: 18,
    width: 18,
    marginRight: 16,
  },
});
