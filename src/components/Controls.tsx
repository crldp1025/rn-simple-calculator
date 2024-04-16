import React, { useContext } from 'react';
import { calculatorObj } from '../constant/Calculator';
import { StyleSheet, View, Text as RNText } from 'react-native';
import Button, { IButtonColorProps } from './Button';
import { isNumeric } from '../tools/helper';
import { CalculatorContext } from '../context/calculatorContext';

let prevValue: string | undefined = undefined;
let currentValue: string = "0";
let operator: string | undefined = undefined;
let resetCurrVal: boolean = false;

const operators = ["÷", "x", "-", "+", "="];

const Controls = () => {
  const { value, setValue } = useContext(CalculatorContext);

  const resetFn = () => {
    prevValue = undefined;
    currentValue = "0";
    operator = undefined;
    resetCurrVal = false;

    handleSetValueFn();
  }

  const handleSetValueFn = () => {
    setValue({
      prevValue: prevValue,
      currentValue: currentValue, 
      operator: operator,
      resetCurrVal: resetCurrVal
    });
  }

  const selectOperatorFn = () => {
    switch(operator) {
      case "+":
        return Number(prevValue) + Number(currentValue);
      case "-":
        return Number(prevValue) - Number(currentValue);
      case "x":
        return Number(prevValue) * Number(currentValue);
      case "÷":
        return Number(prevValue) / Number(currentValue);
      default:
        return Number(currentValue);
    }
  }

  const handleOnPress = (val: string) => {
    if(isNumeric(val)) {
      if(currentValue === "0" || resetCurrVal) {
        currentValue = val;
        resetCurrVal = false;
      } else {
        currentValue += val;
      }

      currentValue = currentValue;
      handleSetValueFn();
    } else {
      if(val === "AC") {
        resetFn();
      } else if(operators.includes(val)) {
        operator = (val !== "=") ? val : operator;

        if(prevValue !== undefined) {
          const total = selectOperatorFn().toFixed(2);
          prevValue = total.toString();
          currentValue = total;
        } else {
          prevValue = currentValue;
        }
        
        resetCurrVal = true;
        if(val === "=") {
          prevValue = undefined;
          operator = undefined;
          console.log(prevValue)
          console.log(currentValue)
        }
        handleSetValueFn();
      } else if(val === "%") {
        let total:number = 0;
        if(prevValue !== undefined && operator !== undefined) {
          total = selectOperatorFn();
          total = Number(total.toFixed(2));
          total = total / 100;
        } else {
          total = Number(currentValue) / 100;
        }
        currentValue = total.toString();
        resetCurrVal = true;
        operator = undefined;
        handleSetValueFn();
      } else if(val === "±") {
        const currentVal = Number(currentValue) * -1;
        currentValue = currentVal.toString();
        handleSetValueFn();
      } else if(val === ".") {
        currentValue += val;
        handleSetValueFn();
      }
    }
  }

  return (
    <>
    { calculatorObj.map((item, index) => (
        <View key={index} style={styles.row}>
          { item.items.map((item2, index2) => (
            <Button 
              key={index2}
              type={(value.operator === item2.value && resetCurrVal) ? "selected" : item2.type as IButtonColorProps}
              col={item2.col}
              marginRight={index2 < (item.items.length - 1)}
              onPress={() => handleOnPress(item2.value)}
            >
              { item2.component ?
                  item2.component
                :
                  item2.value
              }
            </Button>
          ))}
        </View>
      ))}
    </>
  );
};

export default Controls;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  }
});