import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, useWindowDimensions, ImageBackground} from 'react-native';
import {removeData} from '../services/authService';
import ProfileTabTitle from '../components/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent';

import Screens from '../screens';

import DrawerItem from '../components/DrawerItem';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = ({title}) => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name="Photos"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title="Photos" isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name="Tab2"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title="Videos" isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name="Tab3"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title="Saved" isFocused={focused} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '45%',
          backgroundColor: 'white',
          overflow: 'hidden',
          height: dimensions.height,
        },
      }}>
      <Drawer.Screen name={'Home'} component={Screens.Home} />
      <Drawer.Screen name={'Profile'} component={Screens.Profile} />
    </Drawer.Navigator>
  );
};
const CustomDrawerContent = props => {
  return (
    <ImageBackground
      source={require('../../assets/images/drawer.png')}
      resizeMode="cover"
      style={{flex: 1, backgroundColor: 'gray'}}>
      <View style={{flex: 1, marginTop: 60}}>
        <DrawerItem
          title={'Home'}
          onPress={() => props.navigation.navigate('Home')}
          imageSource={require('../../assets/images/home.png')}
        />
        <DrawerItem
          title={'Profile'}
          onPress={() => props.navigation.navigate('Profile')}
          imageSource={require('../../assets/images/profile.png')}
        />
        <DrawerItem
          title={'Logout'}
          onPress={() =>
            removeData().then(x => props.navigation.navigate('Loading'))
          }
          imageSource={require('../../assets/images/logout.png')}
        />
      </View>
    </ImageBackground>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName="Loading">
      <Stack.Screen name="Loading" component={Screens.Loading} />
      <Stack.Screen name="LoginPage" component={Screens.LoginPage} />
      <Stack.Screen name="RegisterPage" component={Screens.RegisterPage} />
      <Stack.Screen name="Drawer" component={MainMenuNavigation} />
      <Stack.Screen name="Chat" component={Screens.Chat} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
