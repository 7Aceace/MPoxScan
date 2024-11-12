import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export default function AboutUs() {
  return (
  <SafeAreaView className="flex-1 items-center justify-center bg-green-400">
      <View className="flex-1 flex-row items-start">
        <View className='items-start'>
          <Text className="text-white text-xl">Back</Text>
        </View>
        <View className='flex-1 items-center'>
          <Text className="text-white text-5xl font-bold">Result</Text>
        </View>
      </View>

      <View className='flex-1'>

      </View>

      <View className='flex-1 flexDirection-row items-center padding-5 justify-center bg-white  rounded-tl-3xl rounded-tr-3xl'>
        <Text>
            BLA BLA BLA BLA
        </Text>
      </View>
    </SafeAreaView>
  );
}