import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function AboutUs() {
  const router = useRouter();
  const { prediction, imageBase64 } = useLocalSearchParams();

  return (
  <SafeAreaView className="flex-1 items-center justify-center bg-green-400">
      <View className="flex-row items-start justify-between px-5 pt-8 absolute top-0 w-full">
        <Pressable onPress={() => router.push("/(tabs)/explore")}>
          <Text className="text-white text-xl">Back</Text>
        </Pressable>
      </View>
      <View className="absolute top-16 w-full">
        <Text className="text-white text-5xl font-bold text-center">Result</Text>
      </View>
      {/*
      <View className="flex-1 w-full px-4 mt-32 mb-4">
      {imageBase64 && (
          <View className="mb-4 items-center">
            <View className="w-64 h-64 rounded-full overflow-hidden border-4 border-white bg-white">
              <Image
                source={{ uri: `data:image/png;base64,${imageBase64}` }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>
        )}
      </View>
    */}


      <View className="absolute top-40 w-full items-center justify-center">
      {imageBase64 && (
          <View className="mb-4 items-center">
            <View className="w-64 h-64 rounded-full overflow-hidden border-4 border-white bg-white">
              <Image
                source={{ uri: `data:image/png;base64,${imageBase64}` }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>
        )}
        {prediction && (
            <Text className="text-white text-2xl font-bold flex-1 center mb-4">{prediction}</Text>
          
        )}
      </View>

      <ScrollView 
        className="absolute bottom-0 left-0 right-0 bg-white p-5 rounded-t-3xl h-[45%] pt-10"
        style={{ flex: 1 }} 
        showsVerticalScrollIndicator={true}
        indicatorStyle="black"
      >
        
        <Text className="text-black text-2xl font-bold">
            Key Information
        </Text>
        <Text className="text-black">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </Text>
      </ScrollView>
      <View className="absolute bottom-10 left-0 right-0 items-center">
        <Pressable 
          className="bg-green-500 rounded-full py-3 px-6" 
          onPress={() => router.push("/(screens)/sop")}
        >
          <Text className="text-white text-lg font-bold">Standard Operating Procedure</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
