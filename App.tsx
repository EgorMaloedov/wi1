import React, { useState, useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Greeting from './pages/greeting';
import * as Font from 'expo-font'

SplashScreen.preventAutoHideAsync();
  
export default function App() {
  const [page, setPage] = useState<React.JSX.Element | false>(false);
  const [backgroundImageUrl, backgroundImageUrlSet] = useState(require('./assets/background-for-authorization.png'));

  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => { }}
        onError={() => { }}
      />
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={backgroundImageUrl} resizeMode="cover" style={styles.image}>
        {page ? page : <Greeting backgroundImageUrlSet={backgroundImageUrlSet} setPage={setPage} />}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});