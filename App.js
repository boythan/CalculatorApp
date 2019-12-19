import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import calculator from './src/reducer';
import { Provider } from 'react-redux';
import CalculatorScreen from './src/Screen';
import styles from './src/styles';
let store = createStore(calculator)
export default function App() {
  return (<View style={styles.screenContainer}>
    <Provider store={store}>
      <CalculatorScreen />
    </Provider>
  </View>
  );
}


