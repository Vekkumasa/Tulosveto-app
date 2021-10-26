import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type CustomTextProps = {
  fontWeight?: 'bold',
  fontSize?: 'small' | 'normal' | 'large',
  style?: TextStyle | TextStyle[] | ViewStyle | ViewStyle[]
};

const CustomText: FunctionComponent<CustomTextProps> = ({ children, fontWeight, fontSize, style }) => {
  const textStyles = [];
  if (fontWeight) {
    textStyles.push(styles.bold);
  }

  switch (fontSize) {
    case 'small':
      textStyles.push(styles.smallFontSize);
      break;
    case 'large':
      textStyles.push(styles.largeFontSize);
      break;
    default:
      textStyles.push(styles.normalFontSize);
      break;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;

  return (
    <Text style={[textStyles, {...passedStyles}]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  largeFontSize: {
    fontSize: 22
  },
  normalFontSize: {
    fontSize: 18
  },
  smallFontSize: {
    fontSize: 14
  }
});

export default CustomText;