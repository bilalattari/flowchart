import React, { useEffect } from 'react';
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
import { RFValue } from 'react-native-responsive-fontsize';
import WebApp from '../WebView/Webview';
import IntroScreen from '../Component/IntroScreen';

const { width, height } = Dimensions.get('window');
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
    this.setState({ screenNavigte: true });
    this.getid();
  };

  render() {
    return this.state.screenNavigte ? (
      <WebApp />
    ) : this.state.screen === 0 ? (
      <IntroScreen
        Step={'Step 1'}
        videoUrl={require('../assest/Boxes.mp4')}
        description={`Easily create your own ${'\n'} smart form, survey,${'\n'} questionnaire, workflow ${'\n'} & bot`}
        controlBtn={'Next'}
        onPress={() => this.setState({ screen: this.state.screen + 1 })}
      />
    ) : this.state.screen === 1 ? (
      <IntroScreen
        Step={'Step 2'}
        videoUrl={require('../assest/Paths.mp4')}
        description={`Send respondents to ${'\n'} future point in the form ${'\n'} based on how they ${'\n'} answer a question`}
        controlBtn={'Next'}
        onPress={() => this.setState({ screen: this.state.screen + 1 })}
      />
    ) : this.state.screen === 2 ? (
      <IntroScreen
        Step={'Step 3'}
        videoUrl={require('../assest/answers.mp4')}
        description={`Add multiple question ${'\n'}types, logic, and${'\n'} personalized branding`}
        controlBtn={'Next'}
        onPress={() => this.setState({ screen: this.state.screen + 1 })}
      />
    ) : this.state.screen === 3 ? (
      <IntroScreen
        Step={'Step 4'}
        videoUrl={require('../assest/Website.mp4')}
        description={`Deploy within seconds via ${'\n'} SMS, Text, Link, Email, QR,${'\n'} Website Chat Bot.`}
        controlBtn={'Next'}
        onPress={() => this.setState({ screen: this.state.screen + 1 })}
      />
    ) : this.state.screen === 4 ? (
      <IntroScreen
        Step={'Step 5'}
        videoUrl={require('../assest/Survey.mp4')}
        description={`Respondents can go ${'\n'} through your designed ${'\n'} funnel`}
        controlBtn={'Next'}
        onPress={() => this.setState({ screen: this.state.screen + 1 })}
      />
    ) : this.state.screen === 5 ? (
      <IntroScreen
        Step={'Step 6'}
        videoUrl={require('../assest/Responses.mp4')}
        description={`Collect Submitted ${'\n'} Responses & Analyze ${'\n'} responses data ${'\n'} in real-time`}
        controlBtn={'Done'}
        onPress={() => this._onDone()}
      />
    ) : null;
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFValue(24),
    fontFamily: fonts.heading,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFValue(24),
    textAlign: 'center',
    fontFamily: fonts.heading,
  },
  titelVIew: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    width: '85%',
    alignSelf: 'center',
    height: '32%',
    justifyContent: 'flex-end',
  },
  videoPlayerStyle: {
    width: '95%',
    height: '40%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  // imageStyle: {
  //     height: PixelRatio.getPixelSizeForLayoutSize(135),
  //     width: '100%',
  //   },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
});
