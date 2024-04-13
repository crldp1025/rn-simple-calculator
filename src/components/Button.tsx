import React, { useMemo } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Text from './Text';
import colors from '../themes/colors';

export type IButtonColorProps = "primary" | "secondary" | "tertiary";

interface IButtonProps extends TouchableOpacityProps {
  type?: IButtonColorProps;
  col?: number;
  dimensions?: number;
  marginRight?: boolean;
}

const buttonColorObj = {
  "primary": colors.darkGray,
  "secondary": colors.orange,
  "tertiary": colors.gray
}

// const defaultDimensions = Dimensions.get('window').width / 4;
const rightSpace = 15;

const Button = ({
  type = "primary", 
  col = 1,
  marginRight = true,
  children, 
  ...props 
}: IButtonProps) => {
  const buttonDimensions = useMemo(() => {
    let dimensionWidth = Dimensions.get('window').width / 4;
    dimensionWidth = dimensionWidth * col;
    if(marginRight) dimensionWidth -= rightSpace; 

    let dimensionHeight = dimensionWidth;
    if(col > 1) dimensionHeight = (dimensionHeight - rightSpace) / col;

    return {
      width: dimensionWidth,
      height: dimensionHeight
    };
  }, [col])

  const buttonStyles = useMemo(() => {
    let newStyles = [
      styles.button, 
      {
        backgroundColor: buttonColorObj[type],
        marginRight: (marginRight) ? 15 : 0,
        width: buttonDimensions.width,
        height: buttonDimensions.height,
        borderRadius: buttonDimensions.width
      }
    ];

    return newStyles;
  }, [type]);



  const buttonTextStyles = useMemo(() => {
    if(type === "tertiary") {
      return { color: colors.black };
    }

    return { color: colors.white };
  }, [type])

  const buttonProps = useMemo(() => {
    const { style, ...newProps } = props;
    return newProps;
  }, []);

  return (
    <TouchableOpacity
      style={buttonStyles}
      {...buttonProps}>
      <Text style={buttonTextStyles}>{ children }</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  }
});