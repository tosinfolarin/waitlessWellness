import { StyleSheet, View } from 'react-native'
import { Link } from 'expo-router';

const RedFlags = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.card} >Home</Link>
      <Link href="/exercises" style={styles.card}>Exercises</Link>
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
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#0005',
    padding: 6,
    borderRadius: 8,
    marginTop: 8
  }
});

export default RedFlags;
