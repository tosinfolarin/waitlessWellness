import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';  

const categories = [
  "Ankle",
  "Plantar Fasciitis",
  "Knee",
  "Hip",
  "Thigh",
  "Hamstring",
  "Groin",
  "Back",
  "Elbow",
  "Shoulder",
  "Wrist & Fingers",
  "Neck"
];

const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 3 - 20;

const Exercises = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Link href="/" style={styles.card} >Home</Link>
        <Link href="/red-flags" style={styles.card} >Red Flags</Link>
        <Link href="/find-physio"style={styles.card}>Find a Physio</Link>
      </View>
      <View style={styles.grid}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => {
              console.log(`Pressed on ${item}`);
            }}
          >
            <Text style={styles.gridText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#34ebe1',
    padding: 10,
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
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: itemSize,
    height: itemSize,
    marginBottom: 15,
    backgroundColor: '#e0f0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  gridText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});

export default Exercises;