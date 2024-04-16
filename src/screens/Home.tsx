import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Controls from '../components/Controls';
import Text from '../components/Text';
import colors from '../themes/colors';
import { CalculatorContext } from '../context/calculatorContext';

const Home = () => {
  const { value } = useContext(CalculatorContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingHorizontal: 16,
          paddingBottom: 5
        }}
      >
        <Text
          style={styles.text}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
          { value.currentValue }
        </Text>
      </View>
      <Controls />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  text: {
    fontSize: 95,
    fontWeight: "300",
    color: colors.white,
  }
});