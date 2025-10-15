import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Link } from 'expo-router';

const FindPhysio = () => {
  return (
    <View style={styles.container}>
    {/* <Image source={Logo} style={styles.logo}/> */}
      <Link href="/" style={styles.card} >Home</Link>
      <Link href="/red-flags" style={styles.card} >Red Flags</Link>
      <Link href="/exercises" style={styles.card}>Exercises</Link>
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
  
  card: {
    backgroundColor: '#0005',
    padding: 6,
    borderRadius: 8,
    marginTop: 8
  }
});

export default FindPhysio;
