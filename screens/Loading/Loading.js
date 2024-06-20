import {SafeAreaView, ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import LoginPage from '../Login/LoginPage';
import {Routes} from '../../navigation/Routes';
const Loading = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Drawer');
    } else {
      navigation.navigate('LoginPage');
    }
  }, [isLoggedIn]);
  return (
    <SafeAreaView>
      <LoginPage />
    </SafeAreaView>
  );
};

export default Loading;
