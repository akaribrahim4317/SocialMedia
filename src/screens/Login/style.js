import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

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
});

export default style;
