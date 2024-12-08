import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';
import { useKeepAwake } from 'expo-keep-awake'; // Import KeepAwake

// Add this type declaration
declare global {
  var analysisResults: {
    prediction: string;
    imageBase64: string;
  } | null;
}

const { width } = Dimensions.get('window');

const Analysis = () => {
  useKeepAwake();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const pulse = useSharedValue(1); // Controls the scale of the pulse
  const opacity = useSharedValue(1); // Controls the opacity of the pulse
  const [isComplete, setIsComplete] = useState(false);

  // Wait for API results
  useEffect(() => {
    const checkResults = setInterval(() => {
      if (global.analysisResults) {
        clearInterval(checkResults);
        setIsComplete(true);
        // Use a timeout to ensure the component is fully mounted before navigating
        setTimeout(() => {
          router.push({
            pathname: '/results',
            params: {
              prediction: global.analysisResults?.prediction,
              imageBase64: global.analysisResults?.imageBase64,
            },
          });
        }, 100); // Adjust timing as needed
        global.analysisResults = null;
      }
    }, 100);

    return () => clearInterval(checkResults);
  }, []);

  // Pulse animation
  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1.2, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // Infinite repeat
      true // Reverse the animation
    );

    opacity.value = withRepeat(
      withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
    opacity: opacity.value,
  }));

  // Steps animation
  useEffect(() => {
    const steps = [
      { delay: 1000, step: 1 },
      { delay: 2000, step: 2 },
      { delay: 3000, step: 3 },
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => {
        setCurrentStep(step);
      }, delay);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5DB075',
          },
          headerTintColor: '#fff',
          headerTitle: 'Analyzing',
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerBackVisible: false,
        }}
      />
      <View style={styles.circleContainer}>
        <View style={styles.baseCircle}>
          <Animated.View style={[styles.pulseCircle, pulseStyle]} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.infoText}>
          Be informed that MPoxScan is a preliminary screening tool that uses machine learning. It is not a medical tool. Consult a physician after the result.
        </Text>
        <Text style={styles.infoText2}>
          Our models are running simulatenously on a free server. This make take a while. 
        </Text>
        <View style={styles.steps}>
          {currentStep >= 1 && <Text style={styles.stepText}>✔ Patterns Identified</Text>}
          {currentStep >= 2 && <Text style={styles.stepText}>✔ Analysis Complete</Text>}
          {currentStep >= 3 && <Text style={styles.stepText}>✔ Results are ready</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DB075',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  baseCircle: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulseCircle: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 100,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontFamily: 'Inter-SemiBold',
  },
  infoText2: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontFamily: 'Inter-SemiBold',
  },
  steps: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  stepText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
});

export default Analysis;