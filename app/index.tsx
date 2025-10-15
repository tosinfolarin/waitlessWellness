import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router';

console.log('Image loaded:', require('../assets/img/wwLogo.png'));

const Home = () => {
  const Logo = require('../assets/img/wwLogo.png')
  return (
    <View style={styles.container}>
    <Image source={Logo} style={styles.logo}/>
      <Text style={styles.title}>Welcome to </Text> 
      <Text style={styles.title}>Waitlesss Wellness {'\n'}</Text>
      <Text style={styles.slogan}> The app that brings physiotherapy to your fingertips{'\n'} {'\n'}</Text>
      <Link href="/exercises" style={styles.card}>Exercises</Link>
      <Link href="/red-flags" style={styles.card} >Red Flags</Link>
      <Link href="/find-physio" style={styles.card}>Find a Physiotherapist</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#34ebe1'
  },
  title: { 
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25

  },
  slogan: {
    fontWeight: 'semibold',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15
  },
  card: {
    backgroundColor: '#0005',
    padding: 6,
    borderRadius: 8,
    marginTop: 8
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Home;