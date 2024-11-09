import { StatusBar, Text, Image, View} from 'react-native';
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
    <SafeAreaView className="flex-1 justify-center bg-white">
     
      
      <StatusBar style="light-content" />
      <Text>Profile</Text> 
     
      <Image
        source={require('../../assets/images/MpoxScanUp.png')}
        style={styles.image}
      />
      <View className='flex-1 flexDirection-row items-center padding-5 justify-center bg-green-400  rounded-tl-3xl rounded-tr-3xl'>
      <Pressable style={styles.button} onPress={openCamera}>
        <Text style={styles.text}>{title2}</Text>
      </Pressable>


      <Pressable  style={styles.button} onPress={pickImage}>
        <Text style={styles.text}>Upload</Text>
      </Pressable>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 35,
    paddingHorizontal: 150,
    borderRadius: 5,
    elevation: 0.5,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'green',
  },

  image: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
});