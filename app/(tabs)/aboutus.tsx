import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

const AboutUs = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../../assets/images/AboutUs.png')}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>
            What is MPoxScan?
          </Text>
          <Text style={styles.description}>
            MpoxScan is a mobile app designed to empower communities by 
            providing a fast and accessible way to detect Monkeypox and other skin lesions. 
            Using advanced AI, the app analyzes images directly 
            from your smartphone to deliver quick, reliable screening results.
            {'\n\n'}
            Please note: MpoxScan is not a diagnostic tool but a preliminary 
            screening aid to guide your next steps. Always consult a healthcare 
            professional for official diagnosis and treatment.
          </Text>
          <Text style={styles.heading}>
            Why choose MPoxScan?
          </Text>
          <View style={styles.featureContainer}>
            <View style={styles.featureRow}>
              <Text style={styles.featureLabel}>Fast: </Text>
              <Text style={styles.featureText}>Quick assessments on the go.</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureLabel}>Easy: </Text>
              <Text style={styles.featureText}>User-friendly for everyone.</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureLabel}>Reliable: </Text>
              <Text style={styles.featureText}>Powered by advanced machine learning.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  image: {
    width: screenWidth,
    height: 224,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5DB075',
    textAlign: 'left',
    marginVertical: 20,
  },
  description: {
    textAlign: 'justify',
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },
  featureContainer: {
    marginTop: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Changed to flex-start to align text properly
    marginVertical: 4,
  },
  featureLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5DB075',
  },
  featureText: {
    flex: 1, // Allow text to wrap properly
    fontSize: 16,
    color: '#333',
  },
});

export default AboutUs;