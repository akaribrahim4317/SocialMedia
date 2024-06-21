import {Alert, Image, SafeAreaView, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Title from '../../components/Title/Title';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebaseConfig'; // Adjust the path as needed
import {saveData} from '../services/authService';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState(
    __DEV__ ? 'akaribrahim4317@gmail.com' : '',
  );
  const [password, setPassword] = useState(__DEV__ ? 'Akar123.' : '');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        if (user) {
          saveData({email, password}).then(x => {
            if (x.success) {
              navigation.navigate('Drawer');
            }
          });
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={[globalStyle.flexGrow]}>
        <View style={style.header}>
          <Title title="Login" />
        </View>
        <Image
          source={require('../../assets/images/login.jpg')}
          style={style.image}
        />
        <View style={style.inputContainer}>
          <InputBox
            value={email}
            setValue={setEmail}
            placeholder={'Enter your e-mail'}
            keyboardType={'email-address'}
          />
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={'Enter your password'}
            secureTextEntry={true}
          />
        </View>
        <View style={style.buttonContainer}>
          <Button title={'Login'} onPress={handleLogin} />
        </View>
        <Text style={{textAlign: 'center', paddingTop: 10}}>
          Don't have an account?{' '}
          <Text
            style={{fontWeight: 'bold', paddingTop: 10}}
            onPress={() => navigation.navigate('RegisterPage')}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
