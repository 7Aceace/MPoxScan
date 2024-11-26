import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from "react-native";
import React from 'react';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { protocolsData } from '../data/protocolsData';

const safetyprotocols = () => {
  const params = useLocalSearchParams();
  console.log('All params:', params);
  
  const { id } = params;
  console.log('Extracted ID:', id);
  
  const protocol = protocolsData[id as keyof typeof protocolsData];
  console.log('Found protocol:', protocol);
  console.log('Available protocols:', Object.keys(protocolsData));

  if (!protocol) {
    console.error('Protocol not found for ID:', id);
    console.error('Type of ID:', typeof id);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Protocol not found: {id}</Text>
        <Pressable onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5DB075',
          },
          headerTintColor: '#fff',
          headerTitle: 'Library',
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerBackVisible: false,
        }}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.subHeader}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#5DB075" style={{ marginLeft: -11 }} />
            <Text style={styles.backText}>Safety Protocols</Text>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={[styles.contentContainer, { padding: 16, marginTop: -20 }]}>
          <Text style={styles.titleText}>{protocol.title}</Text>

          <View style={[styles.listContainer, { paddingLeft: 16 }]}>
            {protocol.items.map((item, index) => (
              <Text key={index} style={styles.listItem}>
                <Text style={styles.listNumber}>{index + 1}. </Text>
                <Text style={styles.listTitle}>{item.title}:</Text>
                {' '}{item.description}
              </Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
  },
  subHeader: {
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#5DB075',
    fontSize: 16,
    marginLeft: 4,
  },
  contentContainer: {
    paddingVertical: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5DB075',
    marginBottom: 16,
  },
  listContainer: {
    marginBottom: 16,
  },
  listItem: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 22,
    marginBottom: 12,
  },
  listNumber: {
    fontWeight: 'bold',
    color: '#5DB075',
  },
  listTitle: {
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default safetyprotocols;
