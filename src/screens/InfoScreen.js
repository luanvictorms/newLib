import * as React from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button,} from 'react-native';
import {useState } from 'react';

import { TextInputMask } from 'react-native-masked-text';

export default function InfoScreen({ route, navigation }) {
  let [ name, setName, ra, setRa, modalidade, setModalidade ] = useState('')
  if(route.params.paramKey == 'E2801160600002129A556374') {
    name = 'Jean'
    ra = 32112001
    modalidade = 'aluno'
  } else if (route.params.paramKey == 'E2801160600002129A556375'){
    name = 'Jonhathan'
    ra = 32112002
    modalidade = 'aluno'
  } else if (route.params.paramKey == 'E2801160600002129A556376'){
    name = 'Luiz'
    ra = 32112003
    modalidade = 'aluno'
  } else if (route.params.paramKey == 'E2801160600002129A556377'){
    name = 'Samara'
    ra = 32112004
    modalidade = 'aluno'
  } else if (route.params.paramKey == 'E2801160600002129A556378'){
    name = 'Luan'
    ra = 32112005
    modalidade = 'aluno'
  } else if (route.params.paramKey == 'E2801160600002129A556379'){
    name = 'Vanessa'
    ra = 32112006
    modalidade = 'professor'
  } else {
    name = 'No data'
    ra = 'No data'
    modalidade = 'No data'
  }
  
  return (
    <View style={styles.body}>
      <Image
        style={styles.bigLogo}
        source={require('../assets/logoSmartLib.png')}
      />
      <Text style={styles.logoTitle}>Smart Lib</Text>

      <View style={styles.separator} />
      
      <Text style={styles.title}>RA :</Text>
      <TextInput
        style={styles.menuItem}
        type={'only-numbers'}
        value={ra}
      />

      <Text style={styles.title}>Nome :</Text>
      <TextInput
        style={styles.menuItem}
        value={name}
      />
      
      <Text style={styles.title}>Responsabilidade :</Text>
      <TextInput
        style={styles.menuItem}
        value={modalidade}
      />
      <View styles={styles.botao}>
        <Button
          title="Adicionar livro"
        />

        <Button
          title="Devolver Livro"
        />
      </View>
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
    margin: 6,
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
    fontSize: 30,
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
    width: 100,
    height: 100,
  },
  input: {
    marginBottom: '20px',
    width: '90%',
    height: 40,
    backgroundColor: '#DDD',
    borderRadius: 5,
    fontSize: 20,
    padding: 5
  },
  botao: {
    padding: 2
  }
});
