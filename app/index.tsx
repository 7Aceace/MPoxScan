import { StatusBar, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View className='flex-1 flex-row align-left'>
        <Text className='text-white content-start text-left'>Back</Text>
        <Text className='text-white'>Results</Text>
      </View>
      <Text className="text-2xl font-bold text-white">MPoxScan Gelson push trial</Text>
      <Pressable 
        onPress={() => router.push("/(tabs)/explore")}
        className="bg-green-500 px-6 py-3 rounded-lg mt-4"
      >
        <Text className="text-white font-bold">Go to Explore</Text>
      </Pressable>
      <StatusBar style="light-content" />
    </SafeAreaView>
  );
}
