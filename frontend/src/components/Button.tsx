import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});



const Button = ({ children, ...props }: { children: React.ReactNode, [x: string]: any}) => {
  const buttonStyle = [styles.container, ];
  return (
    <Pressable {...props}>
      <View style={buttonStyle}>
        <CustomText fontWeight="bold"> {children} </CustomText>
      </View>
    </Pressable>
  );
};

export default Button;