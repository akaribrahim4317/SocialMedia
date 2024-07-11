import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';
import {ProfileTabsNavigation} from '../../../src/navigation/MainNavigation';

const Profile = ({navigation}) => {
  const [profileImage, setProfileImage] = useState(
    require('../../../assets/images/image.png'),
  );

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
        Alert.alert('Error', 'Failed to pick the image');
      } else {
        const source = {uri: response.assets[0].uri};
        setProfileImage(source);
      }
    });
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={[globalStyle.flexGrow]}>
        <View style={style.header}>
          <View style={style.profileImageContainer}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/images/back.png')}
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'flex-start',
                  marginTop: 20,
                  marginLeft: 5,
                }}
              />
            </Pressable>
            <View style={style.profileImageContent}>
              <Pressable onPress={selectImage}>
                <Image style={style.profileImage} source={profileImage} />
              </Pressable>
            </View>
            <View style={[style.profileImageContent, {borderWidth: 0}]}></View>
          </View>
        </View>
        <Text style={style.userName}>Ibrahim Akar</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>43</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />

          <View>
            <Text style={style.statAmount}>123</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <ProfileTabsNavigation />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
