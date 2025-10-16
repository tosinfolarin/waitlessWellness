import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router'; 

const Login = () => {

  const handleSubmit = () => {
    console.log('login form submitted')
  }
  return (
    <View style={styles.container}>
      <Text>Login to your account</Text>
      
      <Pressable onPress={handleSubmit}
        style={({pressed}) => [styles.btn, pressed && styles.pressed]}>
          <Text style={{color:'#0f2f2f2'}}>Login</Text>
      </Pressable>

      <Link href="/signup">
        <Text style={{ textAlign: 'center' }}>
          Click here to create a new account
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
  btn: {
    backgroundColor: '#0356fc',
    padding: 15,
    marginBottom: 30
  },
  pressed: {
    opacity: 0.8
  },
});

export default Login;