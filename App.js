import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from './src/splashScreen/Splashscreen';
import WebApp from './src/WebView/Webview';
import AppIntro from './src/AppIntroSlider/Appintro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';

const RootStack = createNativeStackNavigator();

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  );
};

function App(props) {
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState('');
  useEffect(() => {
    reset();
  }, []);
  const reset = async () => {
    const activeToken = await AsyncStorage.getItem('@storage_Key');
    if (activeToken) {
      setInitial('WebApp');
      setLoading(false);
    } else {
      setInitial('AppIntro');
      setLoading(false);
    }
  };
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={initial}
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name="AppIntro" component={AppIntro} />
            <RootStack.Screen name="WebApp" component={WebApp} />
          </RootStack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export default App;
