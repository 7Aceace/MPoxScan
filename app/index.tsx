import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, StyleSheet, ActivityIndicator, GestureResponderEvent, Dimensions, Modal, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [termsAlreadyAccepted, setTermsAlreadyAccepted] = useState(false);

  // Check terms acceptance status when app loads
  useEffect(() => {
    checkTermsAcceptance();
  }, []);

  const checkTermsAcceptance = async () => {
    try {
      const termsAccepted = await AsyncStorage.getItem('termsAccepted');
      if (termsAccepted === 'true') {
        setTermsAlreadyAccepted(true);
      }
    } catch (error) {
      console.error('Error checking terms acceptance:', error);
    }
  };

  const handleGetStarted = () => {
    if (termsAlreadyAccepted) {
      // Skip modal and go directly to explore if terms were previously accepted
      router.push('/explore');
    } else {
      // Show modal if terms haven't been accepted yet
      setModalVisible(true);
    }
  };

  const handleTermsAcceptance = async () => {
    if (isChecked) {
      try {
        await AsyncStorage.setItem('termsAccepted', 'true');
        setTermsAlreadyAccepted(true);
        setModalVisible(false);
        router.push('/explore');
      } catch (error) {
        console.error('Error storing terms acceptance:', error);
      }
    }
  };

  // Custom Button Component
  const Button = ({
    title,
    handlePress,
    isLoading = false,
  }: {
    title: string;
    handlePress: (event: GestureResponderEvent) => void;
    isLoading?: boolean;
  }) => {
    return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.9}
        style={[
          styles.button,
          isLoading && styles.buttonLoading,
          { position: 'absolute', bottom: 5, width: 200, marginBottom: 28 }
        ]}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: false,
        }} 
      />
      
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Image
            source={require('@/assets/images/MpoxScanUp.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.rect} />

          <Text style={styles.headerText}>
            Instant Skin Lesion{'\n'}Insights
          </Text>


          <Text style={styles.subHeaderText}>
            Capture, scan, and gain insights on skin lesions with ease. Detect and monitor with confidence.
          </Text>


          <Button
            title="Get Started"
            handlePress={handleGetStarted}
          />

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContent}>
                <Text style={styles.modalHeader}>MPoxScan Terms and Conditions</Text>
                <ScrollView style={styles.modalScrollView}>
                  <Text style={[styles.modalText, { textAlign: 'justify' }]}>
                  1. Acceptance of Terms By using our app, you agree to be bound by these terms and conditions. 
                  If you do not agree, please refrain from using the app.
                  {'\n\n'}
                  2. Medical Disclaimer Our app is designed for educational and informational purposes only. It is not
                   intended to replace professional medical advice, diagnosis, or treatment. The app provides a likelihood 
                   estimation of monkeypox or other skin lesions based on a machine-learning model, 
                   but it is not 100% accurate.
                   {'\n\n'}
                   3. No Medical Diagnosis The app’s predictions are not a formal diagnosis. Always seek the advice of your 
                   physician or another qualified healthcare provider with any questions you may have regarding a medical 
                   condition. Never disregard professional medical advice because of something you read in this app.
                   {'\n\n'}
                   4. User Responsibilities{'\n'}
                   {'    \u2022'} You are solely responsible for the quality and accuracy of the images submitted.{'\n'}
                   {'    \u2022'} You must not use the app for unauthorized or unlawful purposes.{'\n'} 
                   {'    \u2022'} The app should not be used as an emergency response tool.
                   {'\n\n'}
                   5. Data Privacy and Security We respect your privacy and are committed to protecting the
                    personal information you share with us. We only collect data necessary to improve the 
                    performance of the app, including images of skin lesions submitted by users. Your data w
                    ill be handled in compliance with relevant privacy laws.
                    {'\n'}
                   {'    \u2022'} All images uploaded will be anonymized and used only for machine-learning improvement and diagnostic model enhancement.{'\n'}
                   {'    \u2022'} Your personal information will not be sold or shared with third parties without your consent, except as required by law{'\n'} 
                   {'\n\n'}
                    6. Limitations of Liability The app and its content are provided on an "as is" basis. While we strive for accuracy,
                    we do not guarantee that the app will always function without interruptions, errors, or
                    inaccuracies. By using the app, you agree that we are not liable for:
                    {'\n'}
                    {'    \u2022'} Any misdiagnosis or incorrect information provided by the app.{'\n'}
                    {'   \u2022'} Any direct, indirect, or consequential damages that may arise from the use or inability to use the app.{'\n'} 
                    {'\n\n'}
                    7. Intellectual Property All content, trademarks, and other intellectual property 
                    on the app are owned by us or our licensors. You may not use, copy, or distribute any 
                    content without our prior written permission.
                    {'\n\n'}
                    8. Modifications to the Terms We reserve the right to modify these terms at any time. Any changes 
                    will be communicated through the app, and your continued use of the app signifies your acceptance of 
                    the revised terms.
                    {'\n\n'} 
                    9. Governing Law These terms and conditions shall be governed by and construed in
                     accordance with the laws of the Philippine Government.
                    {'\n\n'}
                  </Text>
                </ScrollView>
                
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? '#5DB075' : undefined}
                    style={styles.checkbox}
                  />
                  <Text style={styles.checkboxText}>
                    I accept the terms and conditions
                  </Text>
                </View>

                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[
                      styles.modalButton, 
                      styles.buttonContinue,
                      !isChecked && styles.buttonDisabled
                    ]}
                    onPress={handleTermsAcceptance}
                    disabled={!isChecked}
                  >
                    <Text style={styles.buttonTextContinue}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <StatusBar backgroundColor="#161622" style={'dark'} />
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.75, // 75% of screen width
    height: height * 0.45, // 45% of screen height
    position: 'absolute',
    top: height * 0.15, // 15% from top
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  rect: {
    width: width,
    height: height * 0.39,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#5DB075',
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    zIndex: 0,
  },
  headerText: {
    position: 'absolute',
    bottom: height * 0.28, // Position from bottom
    fontSize: width * 0.07,
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
  },
  subHeaderText: {
    position: 'absolute',
    bottom: height * 0.16, // Position from bottom
    fontSize: width * 0.04,
    fontFamily: 'Inter-Regular',
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
    paddingHorizontal: width * 0.1,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    minHeight: height * 0.06,
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.05,
    zIndex: 1,
  },
  buttonLoading: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#5DB075',
    fontSize: width * 0.045,
    fontFamily: 'Inter-SemiBold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 0,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    backgroundColor: '#5DB075',
    color: 'white',
    paddingVertical: 15,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalScrollView: {
    maxHeight: 300,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
  },
  modalButton: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },
  buttonContinue: {
    backgroundColor: '#5DB075',
  },
  buttonTextContinue: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -5,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 60,
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#333333',
  },
  buttonDisabled: {
    backgroundColor: '#A8A8A8',
    opacity: 0.5,
  },
});
