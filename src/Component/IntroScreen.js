import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import VideoPlayer from 'react-native-video-player';
import fonts from '../assest/fonts/fonts';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation';

const IntroScreen = props => {
  const [orientationStyle, setOrientationStyle] = useState({
    videoHeight: 400,
    textFont: RFValue(24),
    TextViewHeight: '32%',
    videoPlayerHeight: '40%',
    videoPlayerWidth: '95%',
  });
  let orientationDidChange = orientation => {
    if (orientation === 'LANDSCAPE') {
      setOrientationStyle({
        videoHeight: 100,
        textFont: RFValue(16),
        TextViewHeight: '25%',
        videoPlayerHeight: '30%',
        videoPlayerWidth: '70%',
      });
    } else {
      setOrientationStyle({
        videoHeight: 400,
        textFont: RFValue(24),
        TextViewHeight: '32%',
        videoPlayerHeight: '40%',
        videoPlayerWidth: '95%',
      });
    }
  };
  Orientation.addOrientationListener(orientationDidChange);

  return (
    <ImageBackground
      source={require('../assest/1.png')}
      style={styles.imageStyle}>
      <View style={styles.titelVIew}>
        <Text style={styles.title}>{props.Step}</Text>
      </View>
      <View
        style={[
          styles.videoPlayerStyle,
          {
            height: orientationStyle.videoPlayerHeight,
            width: orientationStyle.videoPlayerWidth,
          },
        ]}>
        <VideoPlayer
          video={props.videoUrl}
          videoHeight={orientationStyle.videoHeight}
          videoWidth={400}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
          disableSeek={true}
          autoplay={false}
        />
      </View>
      <View
        style={[styles.textView, {height: orientationStyle.TextViewHeight,marginTop:60}]}>
        <Text style={[styles.text, {fontSize: orientationStyle.textFont}]}>
          {props.description}
        </Text>
      </View>
      {/* <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.btnTextStyle}>{props.controlBtn}</Text>
      </TouchableOpacity> */}
    </ImageBackground>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  },
  videoPlayerStyle: {
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: 'white',
    fontFamily: fonts.heading,
    textAlign: 'right',
    marginRight: 20,
    marginTop: 7,
    fontSize: 20,
  },
});
export default IntroScreen;
