import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Title from '../../components/Title/Title';
import {faEnvelope, faL} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {scaleFontSize} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      id: 1,
      firstName: 'Joseph',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 2,
      firstName: 'Angela',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 3,
      firstName: 'Harlan',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 4,
      firstName: 'Adam',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 5,
      firstName: 'Kane',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 6,
      firstName: 'April',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 7,
      firstName: 'Mike',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 8,
      firstName: 'Chris',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 9,
      firstName: 'Mycroft',
      profileImage: require('../../assets/images/image.png'),
    },
    {
      id: 10,
      firstName: 'Abraham',
      profileImage: require('../../assets/images/image.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Alison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1205,
      comments: 35,
      bookmarks: 8,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/image.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 918,
      comments: 26,
      bookmarks: 3,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/image.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Coben',
      location: 'Worcester, MA',
      likes: 300,
      comments: 28,
      bookmarks: 17,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/image.png'),
      id: 3,
    },
    {
      firstName: 'İbrahim',
      lastName: 'Akar',
      location: 'Çanakkale, Turkey',
      likes: 762,
      comments: 255,
      bookmarks: 9,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/image.png'),
      id: 4,
    },
    {
      firstName: 'Sherlock',
      lastName: 'Holmes',
      location: 'London, UK',
      likes: 2192,
      comments: 136,
      bookmarks: 865,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/image.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;

  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;

  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage: ', currentPage);
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
                <Title title={"Let's Explore"} />
                <TouchableOpacity style={style.messageIcon}>
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
