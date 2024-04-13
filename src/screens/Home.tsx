import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { calculatorObj } from '../constant/Calculator';
import { IButtonColorProps } from '../components/Button';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{flex: 1}}>

      </View>
      { calculatorObj.map((item, index) => (
        <View key={index} style={styles.row}>
          { item.items.map((item2, index2) => (
            <Button 
              key={index2}
              type={item2.type as IButtonColorProps}
              col={item2.col}
              style={{marginRight: (index2 < (item.items.length - 1)) ? 15: 0}}
            >
              { item2.value }
            </Button>
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  }
});