import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CodeFromEmail from './codeFromEmail';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function Auth(
  {setPage, backgroundImageUrlSet}:
  {
    setPage: (page: React.JSX.Element) => void,
    backgroundImageUrlSet: React.Dispatch<any>
  }) {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [isChecked, onChangeChecked] = React.useState(false);
    const onChecked = (isChecked: boolean) => {
        onChangeChecked(isChecked)
    }
    const setPageToCodeFromEmail = () => {
        if (isChecked) setPage(<CodeFromEmail backgroundImageUrlSet={backgroundImageUrlSet} setPage={setPage}/>)
    };       
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Введите Ваши имя и фамилию</Text>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.textInputGradient, { marginTop: 10, marginBottom: 10 }]}
      >
        <TextInput placeholderTextColor={'rgba(255, 255, 255, 0.5)'} placeholder='Иван Иванов' style={styles.textInput} onChangeText={onChangeName}></TextInput>
      </LinearGradient>
      <Text style={styles.text} >Введите адрес эл. почты для входа</Text>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.textInputGradient, { marginTop: 10, marginBottom: 10 }]}
        
      >
        <TextInput placeholderTextColor={'rgba(255, 255, 255, 0.5)'} placeholder='mindspin@mail.ru' style={styles.textInput} onChangeText={onChangeEmail}></TextInput>
      </LinearGradient>
      <BouncyCheckbox
        size={20}
        style={styles.checkbox}
        textStyle={{textDecorationLine: "none", color: "white", fontSize: 10}}
        iconStyle={styles.bouncyCheckboxIcon}
        innerIconStyle={styles.bouncyCheckbox}
        onPress={onChecked}
        text='Я принимаю условия публичной оферты'
        textContainerStyle={false}
      />
      <TouchableOpacity onPress={setPageToCodeFromEmail} style={styles.button}>
        <Text style={styles.textForButton} >ОТПРАВИТЬ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    marginBottom: 10
  },
  bouncyCheckbox: {
    borderRadius: 5,
    textDecorationLine: "none",
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  bouncyCheckboxIcon: {
    borderRadius: 5,
    textDecorationLine: "none",
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  textInput: {
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    height: 50,
    color: 'white',
  },
  textInputGradient: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderColor: 'white',
  },
  container: {
    flex: 1,
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: '5.75%',
    paddingLeft: '1%',
    paddingRight: '2.25%'
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
  textForButton: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    paddingTop: '5.5%',
    paddingStart: '20%',
    paddingEnd: '20%',
    paddingBottom: '5.5%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
});