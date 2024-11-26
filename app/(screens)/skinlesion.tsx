import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Pressable, Platform, ScrollView } from "react-native";
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { skinLesionData } from '../data/skinLesionData';

const Skinlesion = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  console.log('Received params:', params);
  
  const id = params.id as string;
  console.log('ID:', id);
  
  if (!id || !skinLesionData[id as keyof typeof skinLesionData]) {
    console.error('Invalid ID or missing data:', id);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error: Invalid skin lesion ID</Text>
        <Pressable onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const condition = skinLesionData[id as keyof typeof skinLesionData];
  console.log('Found condition:', condition);

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
            <Ionicons name="chevron-back" size={24} color="#5DB075" />
            <Text style={styles.backText}>Skin Lesion</Text>
          </Pressable>
        </View>

        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={condition.image}
              style={styles.image}
            />
            <View style={styles.label}>
              <Text style={styles.labelText}>{condition.title}</Text>
            </View>
          </View>

          <View style={styles.aboutContainer}>
            <Text style={styles.aboutHeader}>About {condition.title}</Text>
            <Text style={styles.aboutText}>{condition.about}</Text>
          </View>

          <View style={styles.metricsContainer}>
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Mortality Rate</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${condition.metrics.mortalityRate}%` }]} />
              </View>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Transmission Rate</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${condition.metrics.transmissionRate}%` }]} />
              </View>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Incubation Period</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${condition.metrics.incubationPeriod}%` }]} />
              </View>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Recovery Rate</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${condition.metrics.recoveryRate}%` }]} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Skinlesion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingLeft: 5,
    paddingRight: 5,
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
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 8,
  },
  imageContainer: {
    margin: 16,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 300,
  },
  label: {
    backgroundColor: "#5DB075",
    padding: 8,
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "flex-start",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  aboutContainer: {
    marginHorizontal: 16,
  },
  aboutHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#5DB075",
  },
  aboutText: {
    fontSize: 14,
    color: "#333333",
    lineHeight: 20,
    textAlign: 'justify'
  },
  metricsContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  metricItem: {
    marginBottom: 16,
  },
  metricLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#5DB075",
  },
});
