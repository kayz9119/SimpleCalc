import React from 'react';
import type {Node} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const App: () => Node = () => {
  const [textOne, setTextOne] = React.useState(null);
  const [textTwo, setTextTwo] = React.useState(null);
  const [islem, setIslem] = React.useState('toplama');
  const topla = (sayi1, sayi2) => {
    const number1 = parseInt(sayi1);
    const number2 = parseInt(sayi2);
    return number1 + number2;
  };
  const cikart = (sayi1, sayi2) => {
    const number1 = parseInt(sayi1);
    const number2 = parseInt(sayi2);
    return number1 - number2;
  };
  const carp = (sayi1, sayi2) => {
    const number1 = parseInt(sayi1);
    const number2 = parseInt(sayi2);
    return number1 * number2;
  };
  const bol = (sayi1, sayi2) => {
    const number1 = parseInt(sayi1);
    const number2 = parseInt(sayi2);
    return number1 / number2;
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Simple Calculator</Text>
      </View>
      <View style={style.contentWrapper}>
        <TextInput
          style={style.textInputs}
          onChangeText={text => setTextOne(text)}
          placeholder="Sayı 1"
          value={textOne}
          keyboardType="numeric"
        />
        <View style={style.buttonContainer}>
          <Button
            onPress={() => setIslem('topla')}
            title=" + "
            color="#663399"
          />
          <Button
            onPress={() => setIslem('cikart')}
            title=" - "
            color="#663399"
          />
          <Button
            onPress={() => setIslem('carp')}
            title=" × "
            color="#663399"
          />
          <Button onPress={() => setIslem('bol')} title=" ÷ " color="#663399" />
        </View>
        <TextInput
          style={style.textInputs}
          onChangeText={text => setTextTwo(text)}
          placeholder="Sayı 2"
          value={textTwo}
          keyboardType="numeric"
        />
        <Text style={style.sonuc}>
          Result:{' '}
          <Text style={style.result}>
            {textOne !== '' && textTwo !== '' && islem === 'topla'
              ? topla(textOne, textTwo)
              : ''}
            {textOne !== '' && textTwo !== '' && islem === 'cikart'
              ? cikart(textOne, textTwo)
              : ''}
            {textOne !== '' && textTwo !== '' && islem === 'carp'
              ? carp(textOne, textTwo)
              : ''}
            {textOne !== '' && textTwo !== '' && islem === 'bol'
              ? bol(textOne, textTwo)
              : ''}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const style = new StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 60,
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    color: '#000',
  },
  contentWrapper: {
    marginVertical: 20,
    marginHorizontal: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textInputs: {
    borderBottomWidth: 1,
    borderBottomColor: '#663399',
    marginBottom: 15,
  },
  result: {
    fontWeight: 'bold',
    color: '#000',
  },
  sonuc: {
    fontSize: 24,
  },
});
export default App;
