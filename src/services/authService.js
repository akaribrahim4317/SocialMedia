import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (email, password) => {
  try {
    const jsonValue = JSON.stringify({email, password});
    await AsyncStorage.setItem('@user', jsonValue);
    return {success: true};
  } catch (error) {
    return {success: false};
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    return {success: false};
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@user');
    return {success: true};
  } catch (error) {
    return {success: false};
  }
};
