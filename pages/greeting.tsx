import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Auth from './auth';

export default function Greeting(
  {setPage, backgroundImageUrlSet}:
  {
    setPage: (page: React.JSX.Element) => void,
    backgroundImageUrlSet: React.Dispatch<any>
  }) {
  const setPageToAuth = () => {
    console.log('setPage')
    setPage(<Auth setPage={setPage} backgroundImageUrlSet={backgroundImageUrlSet}/>)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text} >ДОБРО ПОЖАЛОВАТЬ</Text>
      <Text style={styles.text_end} >В MINDSPIN</Text>
      <TouchableOpacity onPress={setPageToAuth} style={styles.button}>
        <Text style={styles.textForButton} >Войти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: '5.75%',
    paddingLeft: '2.25%',
    paddingRight: '2.25%'
  },
  text: {
    fontSize: 50,
    color: 'white',
    marginBottom: -10,
  },
  text_end: {
    fontSize: 50,
    color: 'white',
    paddingBottom: 1
  },
  textForButton: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    paddingTop: '5.5%',
    paddingStart: '21.5%',
    paddingEnd: '21.5%',
    paddingBottom: '5.5%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
});