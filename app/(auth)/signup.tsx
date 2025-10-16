import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Register a new account</Text>
      <Link href="/login">
        <Text style={{ textAlign: 'center' }}>
          Click here to login
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34ebe1',
  },
});

export default Signup;