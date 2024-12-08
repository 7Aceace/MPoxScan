import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useMemo } from 'react';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { SOP_DATA } from './SOPInfo';

const { height } = Dimensions.get('window');

const SOP = () => {
  const params = useLocalSearchParams();
  const predictionKey = String(params.prediction || '');
  const imageBase64 = String(params.imageBase64 || '');

  // Memoize the SOP data to prevent reprocessing
  const sopData = useMemo(() => 
    SOP_DATA[predictionKey] || {
      title: 'Standard Operating Procedures (SOP)',
      steps: []
    }, 
    [predictionKey]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5DB075',
          },
          headerTintColor: '#fff',
          headerTitle: 'S.O.P.',
          headerTitleAlign: 'center',
        }}
      />

      <View style={styles.rectangleBackground} />

      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `data:image/png;base64,${imageBase64}` }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.predictionBox}>
            <Text style={styles.predictionText}>{predictionKey}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.sopContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          persistentScrollbar={true}
          indicatorStyle="black"
          scrollIndicatorInsets={{ right: 1 }}
        >
          <Text style={styles.sopTitle}>{sopData.title}</Text>
          
          {sopData.steps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              {step.description.map((desc, descIndex) => (
                <Text key={descIndex} style={styles.howText}>
                  - {desc}
                </Text>
              ))}
            </View>
          ))}

          <TouchableOpacity 
            style={[styles.button, styles.mainMenuButton]}
            onPress={() => router.push('/(tabs)/explore')}
          >
            <Text style={styles.mainMenuText}>Main Menu</Text>
          </TouchableOpacity>

          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SOP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  rectangleBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 160,
    backgroundColor: '#5DB075',
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 15,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 70,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  predictionBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  predictionText: {
    color: '#5DB075',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
  sopContainer: {
    flex: 1,
    paddingHorizontal: 0,
  },
  sopTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#5DB075',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  stepContainer: {
    marginBottom: 20,
    width: '100%',
  },
  stepTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#374151',
    marginBottom: 8,
  },
  howText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 8,
    paddingRight: 15,
    paddingLeft: 15, // Add left padding for indentation
    marginLeft: 10, // Add left margin for indentation
  },
  bottomSpacing: {
    height: 60,
  },
  button: {
    borderRadius: 24,
    minHeight: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  mainMenuButton: {
    backgroundColor: '#5DB075',
  },
  mainMenuText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
