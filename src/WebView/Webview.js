import React, {Component} from 'react';
import {View,BackHandler,Platform,SafeAreaView,StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export default class WebApp extends Component {
  constructor(props) {
    super(props);
  }
  webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
         <StatusBar barStyle='dark-content'  backgroundColor="#fff" />
        <WebView
          ref={(webView) => { this.webView.ref = webView; }}
          onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
          automaticallyAdjustContentInsets={false}
          source={{uri:'https://app.flowcharts.ai/login'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
    </SafeAreaView>
    )
  }
  
}