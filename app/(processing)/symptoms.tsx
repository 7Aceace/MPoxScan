import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, Pressable} from "react-native";
import { Stack, useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';

const { width, height } = Dimensions.get('window');

const symptomsData = [
  { id: 'none', label: 'None', description: 'No symptoms', icon: require('../../assets/checkboxes/none.png') },
  { id: 'fever', label: 'Fever', description: 'A sudden rise in body temperature', icon: require('../../assets/checkboxes/fever.png') },
  { id: 'headache', label: 'Headache', description: 'Persistent pain or discomfort in the head', icon: require('../../assets/checkboxes/headache.png') },
  { id: 'muscleAche', label: 'Muscle ache', description: 'Soreness or pain in the muscles, commonly throughout the body', icon: require('../../assets/checkboxes/muscle.png') },
  { id: 'swollenLymphNodes', label: 'Swollen Lymph Nodes', description: 'Enlargement of lymph nodes, often in the neck, armpits, or groin', icon: require('../../assets/checkboxes/swollen.png') },
  { id: 'rashes', label: 'Rashes', description: 'Skin eruptions that evolve into fluid-filled blisters', icon: require('../../assets/checkboxes/rashes.png') },
];

const Symptoms = () => {
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
          headerTitle: 'Symptoms',
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerBackVisible: false,
        }}
      />
    
        <View>
        `<Text style={styles.instructions}>
            Select any symptoms you are currently {'\n'}having now
            
            </Text>
        </View>
    


      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        nestedScrollEnabled={true}
      >
           
            <View style={styles.checkboxContainer}>
            {(() => {
                const [checkedSymptoms, setCheckedSymptoms] = React.useState(new Set());
                
                const handleSymptomPress = (symptomId: string) => {
                    setCheckedSymptoms(prev => {
                        const newChecked = new Set(prev);
                        if (symptomId === 'none') {
                            // If "None" is selected, clear all other selections
                            if (!newChecked.has('none')) {
                                newChecked.clear();
                                newChecked.add('none');
                            } else {
                                newChecked.delete('none');
                            }
                        } else {
                            // If another symptom is selected, remove "None" and toggle the symptom
                            newChecked.delete('none');
                            if (newChecked.has(symptomId)) {
                                newChecked.delete(symptomId);
                            } else {
                                newChecked.add(symptomId);
                            }
                        }
                        return newChecked;
                    });
                };

                return symptomsData.map((symptom) => {
                    const isChecked = checkedSymptoms.has(symptom.id);
                    const isDisabled = symptom.id !== 'none' && checkedSymptoms.has('none');
                    
                    return (
                        <Pressable 
                            key={symptom.id} 
                            style={[
                                styles.checkboxItem,
                                isDisabled && { opacity: 0.5 }
                            ]}
                            onPress={() => !isDisabled && handleSymptomPress(symptom.id)}
                        >
                            <Image source={symptom.icon} style={styles.checkboxImage} />
                            <View style={styles.checkboxTextContainer}>
                                <Text style={styles.checkboxLabel}>{symptom.label}</Text>
                                <Text style={styles.checkboxDescription}>{symptom.description}</Text>
                            </View>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={() => !isDisabled && handleSymptomPress(symptom.id)}
                                color={'#5DB075'}
                                disabled={isDisabled}
                            />
                        </Pressable>
                    );
                });
            })()}
            </View>

        </ScrollView>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.button, styles.continueButton]}
                    onPress={() => router.push('/(processing)/analysis')}>
                    <Text style={styles.continueText}>Continue</Text>
                </Pressable>
            </View>
        
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    color: '#374151',
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 22,
  },
  checkboxContainer: {
    marginVertical: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  checkboxImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  checkboxTextContainer: {
    flex: 1,
  },
  checkboxLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  checkboxDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
    gap: 10,
    position: 'absolute',
    bottom: 0,
    left: '5%',
    right: '5%',
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
  continueButton: {
    backgroundColor: '#5DB075',
  },
  continueText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  checkbox: {
    margin: 8,
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#5DB075',
  },
});

export default Symptoms;
