import { StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-400">
      <Text className="text-2xl font-bold text-white">MPoxScan Gelson push trial</Text>
      <StatusBar style="light-content" />

    </SafeAreaView>
  );
}

