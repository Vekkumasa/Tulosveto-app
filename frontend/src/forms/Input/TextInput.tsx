import React from 'react';
import { TextInput as NativeTextInput, StyleSheet, TextStyle, ViewStyle, StyleProp } from 'react-native';

interface TextInputProps {
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>,
  error: string | false | undefined,
  onChangeText: (value: string) => void,
  onBlur: () => void,
  value: string
}

interface Styles {
  textInput: TextStyle | ViewStyle,
  error: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    minWidth: 200,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: 18,
    borderRadius: 3,
    borderColor: '#aab2bb',
  },
  error: {
    borderColor: '#d73a4a',
  }
});

const TextInput = ({ style, error, ...props }: TextInputProps) => {
  const textInputStyle = [styles.textInput, style];
  error && textInputStyle.push(styles.error);

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;