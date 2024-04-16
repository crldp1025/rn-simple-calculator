import React, { useMemo } from 'react';
import { Dimensions, StyleSheet, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Text from './Text';
import colors from '../themes/colors';

export type IButtonColorProps = "primary" | "secondary" | "tertiary" | "selected";

interface IButtonProps extends TouchableOpacityProps {
  type?: IButtonColorProps;
  col?: number;
  dimensions?: number;
  marginRight?: boolean;
}

const buttonColorObj = {
  "primary": colors.darkGray,
  "secondary": colors.orange,
  "tertiary": colors.gray,
  "selected": colors.white
}

const rightSpace = 15;

const Button = ({
  type = "primary", 
  col = 1,
  marginRight = true,
  children, 
  ...props 
}: IButtonProps) => {
  const buttonDimensions = useMemo(() => {
    let dimensionWidth = Dimensions.get('window').width - (rightSpace * 3);
    dimensionWidth = dimensionWidth / 4;
    dimensionWidth = dimensionWidth * col;
    if(col > 1) dimensionWidth += ((col - 1) * rightSpace);

    let dimensionHeight = dimensionWidth;
    if(col > 1) dimensionHeight /= col;

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

  const buttonTextStyles: TextProps["style"] = useMemo(() => {
    if(type === "secondary") {
      return {
        color: colors.white,
        fontSize: 40,
        fontWeight: "600"
      };
    } else if(type === "tertiary") {
      return { color: colors.black };
    } else if(type === "selected") {
      return { color: colors.orange }
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
      {...buttonProps}
    >
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