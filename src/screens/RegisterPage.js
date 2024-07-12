import {Image, SafeAreaView, Text, View, Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import {Title, InputBox, Button} from '../components';
import {auth} from '../../firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {saveData} from '../services/authService';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

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
        <View
          style={{
            with: 100,
            position: 'static',
            marginHorizontal: -18,
            marginTop: 5,
          }}>
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

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputContainer: {
    padding: horizontalScale(17),
  },
  buttonContainer: {
    position: 'relative',
  },
});
