import React, { Component } from 'react';
import { Animated, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import styles from './Styles';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
class Splashscreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      splashBackAnim: new Animated.Value(0),
      splashOverlayAnim: new Animated.Value(0),
      AccessToken: null,
    };
  }

  async componentDidMount() {
    const { splashBackAnim, splashOverlayAnim } = this.state;
    // this.getid();
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(splashBackAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(splashOverlayAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]).start(async () => {
        this.reset(true);
      });
    }, 100);
  }

  reset = async () => {
    const activeToken = await AsyncStorage.getItem('accessToken');
    if (activeToken) {
      this.props.navigation.push('WebApp');
    }
    else {
      this.props.navigation.push('AppIntro');
    }
  }

  render() {
    const { splashBackAnim, splashOverlayAnim } = this.state;
    return (
      <>
        <StatusBar
          backgroundColor="white"
          barStyle={'dark-content'}
        />
        <View style={styles.containerFluid}>
          <Animated.Image
            resizeMode="contain"
            style={[styles.splashBackImage, { opacity: splashBackAnim }]}
          // source={require('../assest/smokerlogo.png')}
          />

          {/* <Animated.View
            style={[
              styles.overlay,
              {
                opacity: splashOverlayAnim,
              },
            ]}>
            <TouchableOpacity
              style={styles.overlayBtn}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.overlayTxt}>Getting Started</Text>
            </TouchableOpacity>
          </Animated.View> */}
          {/* <Animated.View
          style={[
            styles.overlay,
            {
              opacity: splashOverlayAnim,
            },
          ]}>
          <Animated.Image
            resizeMode="contain"
            style={[styles.cnLogo]}
            source={logoImage}
          />
        </Animated.View> */}
        </View>
      </>
    );
  }
}

export default withNavigation(Splashscreen);
