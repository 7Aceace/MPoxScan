import { StatusBar, Text, Image, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const title2 = 'Use Camera to upload an image';

  const prepareImageForUpload = async (uri: string) => {
    setIsLoading(true);
    try {
      // First, check if we can access the image file
      const response = await fetch(uri);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append('file', {
        uri: uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      } as any);

      console.log('Sending image to API...');
      console.log('Image URI:', uri);
      
      // Add IP address validation
      const apiUrl = 'http://52.62.154.58:8000/ask';  // Added port 8000 explicitly
      console.log('Sending request to:', apiUrl);

      try {
        const uploadResponse = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': '*/*',
          },
          // Add timeout
          timeout: 30000
        });

        console.log('Response status:', uploadResponse.status);
        console.log('Response headers:', uploadResponse.headers);

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          throw new Error(`HTTP error! status: ${uploadResponse.status}, body: ${errorText}`);
        }

        const data = await uploadResponse.json();
        console.log('API Response received:', data);

        if (data && data.prediction) {
          router.push({
            pathname: '/(tabs)/aboutus',
            params: {
              prediction: data.prediction,
              imageBase64: data.image
            }
          });
        }

      } catch (fetchError) {
        console.error('Fetch error details:', {
          message: fetchError.message,
          type: fetchError.type,
          code: fetchError.code,
        });
        throw new Error(`API request failed: ${fetchError.message}`);
      }

    } catch (error) {
      console.error('Upload error:', error);
      alert(`Error uploading image: ${error.message}\nPlease check your internet connection and try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const openCamera = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      
      if (permissionResult.granted === false) {
        alert("You've refused to allow this app to access your camera!");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log('Camera result:', result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        await prepareImageForUpload(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error in openCamera:', error);
      alert('Error accessing camera: ' + error.message);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await prepareImageForUpload(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />
      <View className="flex-row justify-between px-5 pt-2">
        <Text className="text-green-500 text-lg">Profile</Text>
        <Text className="text-green-500 text-lg">About Us</Text>
      </View>
      <View className="flex-1 items-center justify-center px-10">
        <Image
          source={require('../../assets/images/MpoxScanUp.png')}
          className="w-[350px] h-[350px] self-center"
        />
      </View>
      <View className="absolute top-[450px] w-full px-5">
        <Text className="text-3xl text-center text-gray-700 font-bold">
          Welcome to MpoxScan!
        </Text>
      </View>
      <View className="absolute bottom-0 left-0 right-0 bg-green-500 p-5 rounded-t-3xl h-[40%] pt-10">
        <Pressable className="bg-white rounded items-center py-9 px-10 mb-5" onPress={openCamera}>
          <Text className="text-green-500 text-xl font-bold">{title2}</Text>
        </Pressable>
        <Pressable className="bg-white rounded items-center py-9 px-10 mb-5" onPress={pickImage}>
          <Text className="text-green-500 text-xl font-bold">Upload an image from gallery</Text>
        </Pressable>
        {image && (
          <Image 
            source={{ uri: image }} 
            className="w-96 h-96 mb-5 self-center"
          />
        )}
      </View>
      {isLoading && (
        <View className="absolute inset-0 bg-black/50 items-center justify-center">
          <Text className="text-white">Processing image...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}