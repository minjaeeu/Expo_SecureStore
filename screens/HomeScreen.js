import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert(" \n" + result);
  } else {
    alert('Não há segredos para esta senha ( ͡* _> ͡*).');
  }
}

export default function App() {
  const [key, onChangeKey] = React.useState('Senha');
  const [value, onChangeValue] = React.useState('Segredo');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Anotações secretas ( ͡~ ͜ʖ ͡°)</Text>
      {}

      <TextInput
        style={styles.textInput}
        clearTextOnFocus
        onChangeText={text => onChangeKey(text)}
        value={key}
      />
      <TextInput
        style={styles.textInput}
        clearTextOnFocus
        onChangeText={text => onChangeValue(text)}
        value={value}
      />
      {}
      <Button
        title="Salvar"
        onPress={() => {
          save(key, value);
          onChangeKey('Senha');
          onChangeValue('Segredo');
        }}
      />

      <Text style={styles.paragraph}>Insira a senha abaixo ( ͡* ͜ʖ ͡*) </Text>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={event => {
          getValueFor(event.nativeEvent.text);
        }}
        placeholder=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 4,
    textAlign: 'center',
  },
});