import React from 'react';
import { StyleSheet, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Menu from '../components/menu';

export default function Home(
  {setPage}:
  {
    setPage: (page: React.JSX.Element) => void
  }) {
  return (
    <View style={styles.container}>
      <Menu setPage={setPage}></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  menuGradientButtons: {
    width: '100%',
    height: '57%',
  },
  menu: {
    width: '100%',
    height: '17%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 1,
    paddingLeft: 2
  },
});