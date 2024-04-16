import React, { ComponentType, forwardRef, useMemo } from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

interface ITextProps extends TextProps {}

const Text = (props: TextProps) => {
  const textProps = useMemo(() => {
    const { style, ...newProps } = props;
    return newProps;
  }, [props.style]);
  
  return (
    <RNText
      style={[styles.text, props.style]}
      {...textProps}>
      { props.children }
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    textAlign: "center",
  }
});