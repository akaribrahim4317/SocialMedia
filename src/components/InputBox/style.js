import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  input: {
    borderWidth: 0.25,
    borderColor: '#022150',
    borderRadius: horizontalScale(10),
    padding: horizontalScale(10),
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Inter', '400'),
    color: '#022150',
    margin: 10,
  },
});
export default style;
