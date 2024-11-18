import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function AboutUs() {
  const router = useRouter();
  const { prediction, imageBase64 } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold mb-4">Analysis Results</Text>
        
        {imageBase64 && (
          <View className="mb-4">
            <Image
              source={{ uri: `data:image/png;base64,${imageBase64}` }}
              className="w-full h-64 rounded-lg"
              resizeMode="contain"
            />
          </View>
        )}
        
        {prediction && (
          <View className="bg-green-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-2">Prediction:</Text>
            <Text className="text-xl text-green-700">{prediction}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}