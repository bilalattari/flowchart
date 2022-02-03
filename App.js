import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './src/splashScreen/Splashscreen';
import WebApp from './src/WebView/Webview';
import AppIntro from './src/AppIntroSlider/Appintro';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootStack = createNativeStackNavigator();
function App(props) {
   const [token ,setToken] = useState()
  useEffect(()=>{
    reset();
  })
  reset = async () => {
    const activeToken = await AsyncStorage.getItem('accessToken');
     console.log('activeToken',activeToken)
    setToken(activeToken)
    if (activeToken) {
      props.navigation.naviagte('WebApp');
    }
    else {
     props.navigation.push('AppIntro');
    }
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={"Splashscreen"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Splashscreen" component={Splashscreen} />
        <RootStack.Screen name="AppIntro" component={AppIntro} />
        <RootStack.Screen name="WebApp" component={WebApp} />
      </RootStack.Navigator>
      </NavigationContainer>
  //   <>
     
  //  { 
  //   token ?
  //   <WebApp/>
  //   :<AppIntro/>
  //  }
  

  //    </>
  );
}

export default App;