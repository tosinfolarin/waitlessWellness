import React from 'react';
import { StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

type ThemedButtonProps = {
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const ThemedButton: React.FC<ThemedButtonProps> = ({ style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0356fc',
    padding: 15,
    marginBottom: 30,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default ThemedButton;
