import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import colors from './src/themes/colors';
import CalculatorProvider from './src/context/calculatorContext';

const App = () => {
  return (
    <CalculatorProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </CalculatorProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
});