import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={[globalStyle.flexGrow]}>
        <View style={style.header}>
          {/* <Pressable onPress={() => console.log('pressed')}>
            <Image
              source={require('../../assets/images/back.png')}
              style={{
                width: 20,
                height: 20,
                alignSelf: 'flex-start',
                marginTop: 60,
                marginLeft: 5,
              }}
            />
          </Pressable> */}

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
              <Image
                style={style.profileImage}
                source={require('../../assets/images/image.png')}
              />
            </View>
            <View style={[style.profileImageContent, {borderWidth: 0}]}>
              {/* <Image
                style={style.profileImage}
                source={require('../../assets/images/image.png')}
              /> */}
            </View>
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
