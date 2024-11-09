import { StatusBar, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-400">
      <View className='flex-1 flex-row align-left'><Text className='text-white content-start text-left'>Back</Text><Text className='text-white'>Results</Text></View>
      <Text className="text-2xl font-bold text-white">MPoxScan Gelson push trial</Text>
      <StatusBar style="light-content" />

    </SafeAreaView>
  );
}

