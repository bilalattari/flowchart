import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
  PixelRatio,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import VideoPlayer from 'react-native-video-player';
import fonts from '../assest/fonts/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import WebApp from '../WebView/Webview';
import IntroScreen from '../Component/IntroScreen';
import {Boxes} from '../assest/Boxes.mp4';

const {width, height} = Dimensions.get('window');
export default class AppIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenNavigte: false,
      currentIndex: 0,
      mute: false,
      value: 0,
      screen: 0,
    };
  }

  getid = async () => {
    const deviceId = DeviceInfo.getUniqueId();
    await AsyncStorage.setItem('accessToken', deviceId);
  };

  _onDone = () => {
    this.setState({screenNavigte: true});
    this.getid();
  };

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      console.log(e);
    }
  }

  _data = [
    {
      title: 'Step 1',
      videoUrl: require('../assest/Boxes.mp4'),
      description: `Easily create your own ${'\n'} smart form, survey,${'\n'} questionnaire, workflow ${'\n'} & bot`,
    },
    {
      title: 'Step 2',
      videoUrl: require('../assest/Paths.mp4'),
      description: `Send respondents to ${'\n'} future point in the form ${'\n'} based on how they ${'\n'} answer a question`,
    },
    {
      title: 'Step 3',
      videoUrl: require('../assest/answers.mp4'),
      description: `Add multiple question ${'\n'}types, logic, and${'\n'} personalized branding`,
    },
    {
      title: 'Step 4',
      videoUrl: require('../assest/Website.mp4'),
      description: `Deploy within seconds via ${'\n'} SMS, Text, Link, Email, QR,${'\n'} Website Chat Bot.`,
    },
    {
      title: 'Step 5',
      videoUrl: require('../assest/Survey.mp4'),
      description: `Respondents can go ${'\n'} through your designed ${'\n'} funnel`,
    },
    {
      title: 'Step 6',
      videoUrl: require('../assest/Responses.mp4'),
      description: `Collect Submitted ${'\n'} Responses & Analyze ${'\n'} responses data ${'\n'} in real-time`,
    },
  ];

  _renderItem = ({item}) => {
    return (
      <IntroScreen
        Step={item.title}
        videoUrl={item.videoUrl}
        description={item.description}
      />
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={this._data}
        activeDotStyle={{backgroundColor: 'black'}}
        onDone={() => {
          this.storeData('change')
          this.props.navigation.navigate('WebApp')
        }}
      />
    );
  }
}
