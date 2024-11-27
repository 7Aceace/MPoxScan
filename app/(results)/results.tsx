import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

const Results = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5DB075',
          },
          headerTintColor: '#fff',
          headerTitle: 'Results',
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerBackVisible: true,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.text}>Results Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#374151',
  },
});

export default Results;