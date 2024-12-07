import React, { useEffect, useRef, useState } from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Pressable, 
  Alert, 
  Animated, 
  Image 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function ExploreScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const scanLineAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startScanAnimation();
  }, []);

  const startScanAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnimation, {
          toValue: 350,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const handleImageSelection = async (uri: string, source: 'camera' | 'gallery') => {
    try {
      router.push({
        pathname: '/(processing)/review',
        params: { imageUri: uri, source },
      });
    } catch (error) {
      console.error('Navigation Error:', error);
      Alert.alert('Error', 'Failed to navigate to review screen.');
    }
  };

  const openCamera = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      Alert.alert('Permission Required', 'Camera access is needed to take a photo.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      handleImageSelection(result.assets[0].uri, 'camera');
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      handleImageSelection(result.assets[0].uri, 'gallery');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/MpoxScanUp.png')}
          style={styles.mainImage}
        />
        <Animated.View
          style={[
            styles.scanLine,
            { transform: [{ translateY: scanLineAnimation }] },
          ]}
        >
          <LinearGradient
            colors={['transparent', '#5DB075', 'transparent']}
            style={styles.gradientLine}
          />
        </Animated.View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={openCamera}>
          <MaterialIcons name="camera-alt" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Take a Photo</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={pickImage}>
          <MaterialIcons name="photo-library" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Upload from Gallery</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: 300,
    height: 300,
  },
  scanLine: {
    position: 'absolute',
    width: '100%',
    height: 4,
    backgroundColor: '#5DB075',
  },
  gradientLine: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5DB075',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 10,
  },
});
