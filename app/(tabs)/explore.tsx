import { StatusBar, Text, Image, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Explore(props) {
  const { 
    title2 = 'Use Camera to upload an image' 
  } = props;
  const [image, setImage] = useState<string | null>(null);

  const openCamera = async () => {
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />
      
      {/* Header - Placed at the very top */}
      <View className="flex-row justify-between px-5 pt-2">
        <Text className="text-green-500 text-lg">Profile</Text>
        <Text className="text-green-500 text-lg">About Us</Text>
      </View>
     
      {/* Main content area with image */}
      <View className="flex-1 items-center self-center justify-normal px-10">
        <Image
          source={require('../../assets/images/MpoxScanUp.png')}
          className="w-[350px] h-[350px] self-center absolute top-10 "
        />
      </View>
      <View className="absolute top-[450px] w-full px-5">
        <Text className="text-3xl text-center text-gray-700 font-bold">
          Welcome to MpoxScan!
        </Text>
      </View>
      {/* Bottom green view */}
      <View className="absolute bottom-0 left-0 right-0 bg-green-500 p-5 rounded-t-3xl h-[40%] pt-10">
        <Pressable className="bg-white rounded items-center py-9 px-10 mb-5" onPress={openCamera}>
          <Text className="text-green-500 text-xl font-bold">{title2}</Text>
        </Pressable>

        <Pressable className="bg-white rounded items-center  py-9 px-10 mb-5" onPress={pickImage}>
          <Text className="text-green-500 text-xl font-bold">Upload an image from gallery</Text>
        </Pressable>
        
        {image && (
          <Image 
            source={{ uri: image }} 
            className="w-96 h-96 mb-5 self-center"
          />
        )}
      </View>
    </SafeAreaView>
  );
}