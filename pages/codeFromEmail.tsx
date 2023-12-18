import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import Home from './home';
import Auth from './auth';

export default function CodeFromEmail(
  {setPage, backgroundImageUrlSet}:
  {
    setPage: (page: React.JSX.Element) => void,
    backgroundImageUrlSet: React.Dispatch<any>
  }) {
  const [code, setCode] = React.useState('');
  const onChangeCode = (code: string) => {
    setCode(code);
  };
  const setPageToAuth = () => {
    setPage(<Auth setPage={setPage} backgroundImageUrlSet={backgroundImageUrlSet}/>)
  }
  const pageToLK = () => {
    if (code === '111111') {
      backgroundImageUrlSet(require('../assets/background.png'));
      setPage(<Home setPage={setPage}/>)
    }
  }
  return (
    <View style={styles.container}>
      <OtpInput 
     numberOfDigits={6}
     theme={{
      containerStyle: {
        width: '100%',
        height: '13%',
        padding: '2%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      pinCodeContainerStyle: {
        width: 10,
        height: 10,
        marginEnd:10
      },
      pinCodeTextStyle: {
        color: 'white'
      }
     }}
     onTextChange={onChangeCode}
     focusColor="rgba(255, 255, 255, 1)"
     />
     <View style={styles.containerForButtons}>
     <TouchableOpacity
      onPress={setPageToAuth} 
      style={styles.buttonLeft}
    >
        <Text style={styles.textForButton} >Назад</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pageToLK} style={styles.buttonRigh}>
        <Text style={styles.textForButton} >войти</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForButtons: {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '100%',
    height: 80,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: '5.75%',
    paddingLeft: 0,
    marginLeft: 0,
    paddingRight: '2.25%'
  },
  container: {
    flex: 1,
    width: '90%',
    height: '100%',
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
    fontSize: 16,
    width: '100%'
  },
  buttonLeft: {
    paddingTop: '5.5%',
    paddingStart: '12%',
    paddingEnd: '12%',
    paddingBottom: '5.5%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  buttonRigh: {
    paddingTop: '5.5%',
    paddingStart: '25%',
    paddingEnd: '25%',
    paddingBottom: '5.5%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight: '1%',
  }
});