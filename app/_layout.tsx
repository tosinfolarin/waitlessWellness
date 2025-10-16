import { Text, StyleSheet, View } from 'react-native'
import { Stack } from 'expo-router';


const RootLayout = () => {
  return (
    <View style={{flex: 1}}>
        <Stack>
            <Stack.Screen name="index" options={{title: 'Home', headerShown: false}}></Stack.Screen>
            <Stack.Screen name="exercises" options={{title: 'Exercises'}}></Stack.Screen>
            <Stack.Screen name="find-physio" options={{title: 'Find a Physiotherapist'}}></Stack.Screen>
            <Stack.Screen name="red-flags" options={{title: 'Red Flags'}}></Stack.Screen>
        </Stack>
    </View>
  );
};

export default RootLayout;
