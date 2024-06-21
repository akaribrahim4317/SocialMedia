import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const DrawerItem = ({title, imageSource, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{margin: 16}}>{title}</Text>
        <Image
          source={imageSource}
          style={{height: 18, width: 18, marginRight: 16}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({});
