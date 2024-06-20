import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Title from '../../components/Title/Title';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
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
        />
      </View>
      <View style={style.buttonContainer}>
        <Button title={'Login'} />
      </View>
      <Text style={{textAlign: 'center', paddingTop: 10}}>
        Don't have an account?{' '}
        <Text
          style={{fontWeight: 'bold', paddingTop: 10}}
          onPress={() => navigation.navigate('RegisterPage')}>
          Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginPage;
