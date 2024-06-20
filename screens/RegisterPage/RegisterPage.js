import {Image, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Title from '../../components/Title/Title';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

const RegisterPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  console.log(email, password);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.header}>
        <Title title="Sign Up" />
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
        <InputBox
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder={'Confirm your password'}
        />
        <View style={style.buttonContainer}>
          <Button title={'Register'} />
        </View>
        <View>
          <Text style={{textAlign: 'center', paddingTop: 10}}>
            Already have an account?
            <Text
              style={{fontWeight: 'bold', padding: 20}}
              onPress={() => navigation.navigate('LoginPage')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
