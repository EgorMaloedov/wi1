import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function Menu(
  {setPage}:
  {
    setPage: (page: React.JSX.Element) => void
  }) {
  return (
      <View style={styles.menu}>
        <LinearGradient
          colors={['rgba(0, 14, 43, 1)', 'rgba(0, 84, 113, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.menuGradientButtons, { marginTop: 10, marginBottom: 10, }]}
        >
            <ImageBackground source={require('../assets/bx_home-alt.png')} style={styles.homeButton}>

            </ImageBackground>
        </LinearGradient>
      </View>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    height: '70%',
    width: '30%'
  },
  menuGradientButtons: {
    width: '95%',
    height: '57%',
    borderRadius: 30,
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  menu: {
    width: '100%',
    height: '17%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});