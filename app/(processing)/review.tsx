import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, Pressable } from "react-native";
import { Stack, useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Review = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5DB075',
          },
          headerTintColor: '#fff',
          headerTitle: 'Review',
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerBackVisible: false,
        }}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/monkeypox.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.instructions}>
          Make sure the photo is <Text style={styles.boldText}>sharp</Text>,{' '}
          <Text style={styles.boldText}>centered</Text> and{' '}
          <Text style={styles.boldText}>free from obstructing objects</Text>.
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable 
            style={[styles.button, styles.retakeButton]} 
            onPress={() => router.replace('')}>
            <Text style={styles.retakeText}>Retake</Text>
          </Pressable>
          <Pressable 
            style={[styles.button, styles.continueButton]} 
            onPress={() => router.replace('/(processing)/symptoms')}>
            <Text style={styles.continueText}>Continue</Text>
          </Pressable>
        </View>
      </ScrollView>
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
  },
  imageContainer: {
    width: width,
    height: height * 0.4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    color: '#374151',
    marginTop: 20,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
    gap: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  button: {
    backgroundColor: '#5DB075',
    borderRadius: 24,
    minHeight: height * 0.06,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  retakeButton: {
    backgroundColor: '#E5E5E5',
  },
  continueButton: {
    backgroundColor: '#5DB075',
  },
  retakeText: {
    color: '#6B7280',
    fontWeight: '600',
    fontSize: 16,
  },
  continueText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Review;
