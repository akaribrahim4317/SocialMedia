import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';
import Loading from '../screens/Loading/Loading';
import LoginPage from '../screens/Login/LoginPage';
import Register from '../screens/RegisterPage/RegisterPage';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {removeData} from '../screens/services/authService';
import DrawerItem from '../components/DrawerItem/DrawerItem';
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
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};
const CustomDrawerContent = props => {
  console.log(props);
  return (
    <ImageBackground
      source={require('../assets/images/drawer.png')}
      resizeMode="cover"
      style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 60}}>
        <DrawerItem
          title={'Home'}
          onPress={() => props.navigation.navigate(Routes.Home)}
          imageSource={require('../assets/images/home.png')}
        />
        <DrawerItem
          title={'Profile'}
          onPress={() => props.navigation.navigate(Routes.Profile)}
          imageSource={require('../assets/images/profile.png')}
        />
        <DrawerItem
          title={'Logout'}
          onPress={() =>
            removeData().then(x => props.navigation.navigate('Loading'))
          }
          imageSource={require('../assets/images/logout.png')}
        />
      </View>
    </ImageBackground>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Loading}>
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegisterPage" component={Register} />
      <Stack.Screen name="Drawer" component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
