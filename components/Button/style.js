import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#022150',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    padding: horizontalScale(10),
    marginLeft: horizontalScale(20),
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Inter',
    fontSize: 14,
  },
});

export default style;
