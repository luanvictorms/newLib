import * as React from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Input} from 'react-native';
import {useState, useReducer } from 'react';

import { TextInputMask } from 'react-native-masked-text';

export default function HomeScreen({ navigation }) {
  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.bigLogo}
        source={require('../assets/logoSmartLib.png')}
      />
      <Text style={styles.logoTitle}>Smart Lib</Text>

      <View style={styles.separator} />

      <Text style={styles.title}>RFID :
      </Text>

      <TextInput
        style={{borderRadius: 10,marginBottom: '20px', width: '70%', backgroundColor: '#F3F4F6',fontSize: 15, borderColor: '#4B5563', borderWidth: 5,}}
        type="text"
        name="rfid"
        onChange={onChangeHandler}
        value={inputValue}
      />

      <Button
        style={{borderRadius:20}}
        title="Verificar RFID"
        onPress={() => navigation.navigate('Info', {paramKey: inputValue})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB',
  },
  menuList: {
    flex: 1,
  },
  menuItem: {
    width: '80%',
    margin: 20,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F3F4F6',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#4B5563',
  },
  title: {
    color: '#4B5563',
    fontSize: 20,
    textAlign: 'center',
  },
  titleItem: {
    color: '#1F2937',
    fontSize: 20,
    textAlign: 'center',
  },
  logoTitle: {
    color: '#1F2937',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    backgroundColor: '#1F2937',
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    marginRight: 25,
    width: 50,
    height: 50,
  },
  bigLogo: {
    marginTop: 25,
    width: 150,
    height: 150,
  },
  input: {
    marginBottom: '20px',
    width: '90%',
    height: 40,
    backgroundColor: '#DDD',
    borderRadius: 5,
    fontSize: 20,
    padding: 5
  }
});
