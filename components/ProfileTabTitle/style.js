import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
  },
  titleNotFocuced: {
    color: '#79869f',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
  },
});

export default style;
