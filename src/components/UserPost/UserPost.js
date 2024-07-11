import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../../assets/styles/scaling';
import {getFontFamily} from '../../../assets/fonts/helper';

const UserPost = props => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <UserProfileImage
            imageDimensions={horizontalScale(48)}
            profileImage={props.profileImage}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={styles.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size={scaleFontSize(24)}
          color={'#79868f'}
        />
      </View>
      <View style={styles.postImage}>
        <Image source={{uri: props.image}} style={{width: 640, height: 480}} />
      </View>
      <View style={styles.userPostStats}>
        <View style={styles.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} color={'#79869f'} />
          <Text style={styles.userPostStatText}>{props.likes}</Text>
        </View>
        <View style={styles.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faMessage} color={'#79869f'} />
          <Text style={styles.userPostStatText}>{props.comments}</Text>
        </View>
        <View style={styles.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869f'} />
          <Text style={styles.userPostStatText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;

const styles = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#eff2f6',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
  },
  location: {
    color: '#79868f',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(15),
  },
  userPostStats: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  userPostStatButton: {flexDirection: 'row'},
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatText: {marginLeft: horizontalScale(3), color: '#79869f'},
});
