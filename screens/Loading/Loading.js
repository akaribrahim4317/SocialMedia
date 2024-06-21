import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {auth} from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../services/authService';
import {useIsFocused} from '@react-navigation/native';
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
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return null;
};

export default Loading;
