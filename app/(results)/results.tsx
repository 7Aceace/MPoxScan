import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { diseaseInformation } from './diseaseInfo';

const Results = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const predictionKey = String(params.prediction || '');
  const imageBase64 = String(params.imageBase64 || '');
  const confidence = parseFloat(String(params.confidence)) || 0; // Get confidence from params

  const [localPredictionKey, setLocalPredictionKey] = useState('');
  const [localImageBase64, setLocalImageBase64] = useState('');

  React.useEffect(() => {
    // Store the data in local state when the component loads
    setLocalPredictionKey(String(params.prediction || ''));
    setLocalImageBase64(String(params.imageBase64 || ''));
  }, [params]);

  // Memoize the data to prevent unnecessary recalculations
  const info = React.useMemo(() => (
    diseaseInformation[predictionKey] || {
      description: 'Information not available',
      keyPoints: [],
      severity: 'Low'
    }
  ), [predictionKey]);

  const handleSOPNavigation = async () => {
    setIsLoading(true);
    if (predictionKey === 'Healthy') {
      router.push('/explore');
    } else {
      setTimeout(() => {
        router.push({
          pathname: '/(results)/SOP',
          params: {
            prediction: localPredictionKey,
            imageBase64: localImageBase64,
          }
        });
        setIsLoading(false);
      }, 500); // Adjust timing as needed
    }
  };

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
          headerBackVisible: false,
        }}
      />

      <View style={styles.rectangleBackground} />

      <View style={styles.fixedContent}>
        <View style={styles.imageWrapper}>
          {imageBase64 && (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: `data:image/png;base64,${imageBase64}` }}
                style={styles.resultImage}
                resizeMode="cover"
              />
            </View>
          )}
        </View>

        <View style={styles.resultsContainer}>
          <View style={styles.predictionBox}>
            <Text style={styles.predictionText}>{predictionKey || 'No prediction available'}</Text>
          </View>

          <View style={styles.confidenceBox}>
          <Text style={styles.confidenceText}>
          Confidence Rate: {confidence.toFixed(2)}% {/* Display confidence */}
         </Text>
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        indicatorStyle="black"
        scrollIndicatorInsets={{ right: 1 }}
      >
        <Text style={styles.infoHeader}>Key Information</Text>
        <Text style={styles.infoText}>{info.description}</Text>

        <TouchableOpacity 
          style={styles.sopButton}
          onPress={handleSOPNavigation}
          activeOpacity={0.8}
          delayPressIn={0}
        >
          <Text style={styles.sopButtonText}>
            {predictionKey === 'Healthy' ? 'Main Menu' : 'Standard Operating Procedures'}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Loading Overlay */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color="#5DB075" />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  fixedContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    marginRight: 0,
    paddingRight: 0,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingRight: 15,
  },
  infoHeader: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#5DB075',
    marginTop: 20,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 22,
    textAlign: 'justify',
  },
  rectangleBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    backgroundColor: '#5DB075',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#5DB075',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  imageWrapper: {
    marginVertical: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 175,
    overflow: 'hidden',
    borderWidth: 6,
    borderColor: 'white',
  },
  resultImage: {
    width: '100%',
    height: '100%',
  },
  resultsContainer: {
    marginTop: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: '100%',
  },
  
  predictionBox: {
    backgroundColor: '#5DB075',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    marginTop:20,
    width: '100%',
    alignItems: 'center',
    height: 45, // Added fixed height
    justifyContent: 'center', // Center content vertically
  },
  
  predictionText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  
  confidenceBox: {
    borderWidth: 2,
    borderColor: '#5DB075',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  
  confidenceText: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
  },
  sopButton: {
    flex: 1,
    backgroundColor: '#5DB075',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 80,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  sopButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 22,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent white
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Results;