import { StatusBar, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Explore(props) {
  const { 
    title2 = 'Camera' 
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
  /* Upload fnction*/
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
    <SafeAreaView className="flex-1 items-center justify-center bg-green-400">
      <Text className="text-2xl font-bold text-white"></Text>
      <StatusBar style="light-content" />

      <Image
        source={require('../../assets/images/ImageUp.png')}
        style={styles.image}
      />
      
      <Pressable style={styles.button} onPress={openCamera}>
        <Text style={styles.text}>{title2}</Text>
      </Pressable>


      <Pressable style={styles.button} onPress={pickImage}>
        <Text style={styles.text}>Upload</Text>
      </Pressable>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 2,
    elevation: 0.5,
    backgroundColor: 'black',
    marginVertical: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
});