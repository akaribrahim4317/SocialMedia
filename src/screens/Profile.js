import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import globalStyle from '../../assets/styles/globalStyle';
import {ProfileTabsNavigation} from '../navigation/MainNavigation';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const Profile = ({navigation}) => {
  const [profileImage, setProfileImage] = useState(
    require('../../assets/images/image.png'),
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
                source={require('../../assets/images/back.png')}
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

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#79869f',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 0.5,
    borderColor: '#79869f',
  },
  statBorder: {
    borderRightWidth: 0.5,
    borderColor: '#79869f',
  },
});
