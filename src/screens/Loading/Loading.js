import {SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getData} from '../services/authService';
import {useIsFocused} from '@react-navigation/native';
import style from './style';

const Loading = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      getData().then(x => {
        if (x !== null) {
          setLoading(false);
          navigation.navigate('Drawer');
        } else {
          navigation.navigate('LoginPage');
        }
      });
    }
  }, [isFocused]);

  if (loading) {
    return (
      <SafeAreaView style={style.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return null;
};

export default Loading;
