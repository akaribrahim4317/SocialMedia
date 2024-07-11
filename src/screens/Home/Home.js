import React, {useState, useEffect} from 'react';
import {faker} from '@faker-js/faker';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Title from '../../components/Title/Title';
import {faEnvelope, faL} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {scaleFontSize} from '../../../assets/styles/scaling';
import globalStyle from '../../../assets/styles/globalStyle';

const Home = ({navigation}) => {
  const userStories = Array(20)
    .fill(null)
    .map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      profileImage: faker.image.avatar(),
    }));

  const userPosts = Array(20)
    .fill(null)
    .map(() => ({
      id: faker.string.uuid(),
      location: faker.location.country(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      profileImage: faker.image.avatar(),
      image: faker.image.urlPicsumPhotos(),
      email: faker.person.fullName(),
      bookmarks: faker.number.int(1000),
      likes: faker.number.int(1000),
      comments: faker.number.int(1000),
    }));

  console.log(userPosts);

  const userStoriesPageSize = 4;

  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;

  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar />
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Pressable
                    onPress={() => {
                      navigation.openDrawer();
                    }}>
                    <Image
                      style={style.image}
                      source={require('../../../assets/images/drawerIcon.png')}
                    />
                  </Pressable>

                  <Title title={"Let's Explore"} />
                </View>

                <TouchableOpacity
                  style={style.messageIcon}
                  onPress={() => {
                    navigation.navigate('Chat');
                  }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={'#898DAE'}
                    size={scaleFontSize(20)}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userStoriesCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                image={item.image}
                profileImage={item.profileImage}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
