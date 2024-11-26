import React from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import Checkbox from 'expo-checkbox';

const { width, height } = Dimensions.get('window');

interface TermsModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  modalVisible,
  setModalVisible,
  isChecked,
  setIsChecked,
}) => {
  return (
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
            <Text style={styles.modalText}>
              Before we begin, please note that this app is for educational purposes only and should not replace professional medical advice.
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
              onPress={() => {
                if (isChecked) {
                  setModalVisible(false);
                  router.push('/explore');
                }
              }}
              disabled={!isChecked}
            >
              <Text style={styles.buttonTextContinue}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 60,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#333333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
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
  buttonDisabled: {
    backgroundColor: '#A8A8A8',
    opacity: 0.5,
  },
}); 