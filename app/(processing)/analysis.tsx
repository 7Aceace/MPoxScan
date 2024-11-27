import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Animated, { 
  Easing, 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const Analysis = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const progress = useSharedValue(0);
  const [isComplete, setIsComplete] = useState(false);

  // Handle completion and navigation
  const handleCompletion = () => {
    setIsComplete(true);
    // Add a small delay before navigation
    setTimeout(() => {
      router.push('/(results)/results');
    }, 500); // 500ms delay after animation completes
  };

  // Circle animation that completes one rotation
  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 3000,
      easing: Easing.linear,
    }, (finished) => {
      if (finished) {
        runOnJS(handleCompletion)();
      }
    });
  }, []);

  // Sequentially showing bullet points
  useEffect(() => {
    const intervals = [
      setTimeout(() => setCurrentStep(1), 1000),
      setTimeout(() => setCurrentStep(2), 2000),
      setTimeout(() => setCurrentStep(3), 3000),
    ];
    return () => intervals.forEach(clearTimeout);
  }, []);

  // Animated circle style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 360}deg` }],
  }));

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
          headerBackVisible: true,
        }}
      />
      <View style={styles.circleContainer}>
        <Animated.View 
          style={[
            styles.circle, 
            animatedStyle,
            isComplete && styles.completeCircle
          ]} 
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.infoText}>
          Be informed that MPoxScan is a preliminary screening tool that uses machine learning. It is not a medical tool. Consult a physician after the result.
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
    marginTop: 40,
  },
  circle: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    borderWidth: 5,
    borderColor: 'white',
    borderTopColor: '#5DB075',
  },
  completeCircle: {
    borderColor: 'white',
    borderTopColor: 'white',
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
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
    position: 'relative',
    fontFamily:'Inter-SemiBold'
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
