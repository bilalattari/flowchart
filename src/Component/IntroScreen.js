import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
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
const IntroScreen = props => {
  return (
    <ImageBackground
      source={require('../assest/1.png')}
      style={styles.imageStyle}>
      <View style={styles.titelVIew}>
        <Text style={styles.title}>{props.Step}</Text>
      </View>
      <View style={styles.videoPlayerStyle}>
        <VideoPlayer
          video={props.videoUrl}
          videoHeight={200}
          videoWidth={400}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
          disableSeek={true}
          autoplay={false}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.description}</Text>
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.btnTextStyle}>{props.controlBtn}</Text>
      </TouchableOpacity>
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
