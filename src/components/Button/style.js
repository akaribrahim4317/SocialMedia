import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0150EC',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    padding: horizontalScale(5),
    marginHorizontal: 26,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 14,
  },
});

export default style;
