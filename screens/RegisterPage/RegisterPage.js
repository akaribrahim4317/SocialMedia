import {Image, SafeAreaView, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Title from '../../components/Title/Title';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import {auth} from '../../firebaseConfig'; // Adjust the path as needed
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {saveData} from '../services/authService';
const RegisterPage = ({navigation}) => {
  const [email, setEmail] = useState(
    __DEV__ ? 'akaribrahim4317@gmail.com' : '',
  );
  const [password, setPassword] = useState(__DEV__ ? 'Akar123.' : '');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      saveData(email, password).then(x => {
        console.log(x);
      });
      Alert.alert('Success', 'User account created & signed in!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'That email address is invalid!');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };
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
          secureTextEntry={true}
        />
        <InputBox
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder={'Confirm your password'}
          secureTextEntry={true}
        />
        <View style={style.buttonContainer}>
          <Button title={'Register'} onPress={handleRegister} />
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
