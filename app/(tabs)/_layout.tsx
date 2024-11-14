import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBar } from '../../components/TabBar';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#ffffff',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#4CAF50',
            height: 56,
            paddingHorizontal: 16, // Add horizontal padding
            paddingVertical: 8,    // Adjust vertical padding
          }
        }}
      >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require('../../assets/buttons/Librarybutton_A.png') : require('../../assets/buttons/Librarybutton_NA.png')}
              style={{ 
                width: 50,       // Reduced size
                height: 50,      // Reduced size
                resizeMode: 'contain'  // Ensures the whole image is visible
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require('../../assets/buttons/Scanbutton_A.png') : require('../../assets/buttons/Scanbutton_NA.png')}
              style={{ 
                width: 50,       // Reduced size
                height: 45,      // Reduced size
                resizeMode: 'contain'  // Ensures the whole image is visible
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="aboutus"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require('../../assets/buttons/HistoryButton_A.png') : require('../../assets/buttons/HistoryButton_NA.png')}
              style={{ 
                width: 50,       // Reduced size
                height: 50,      // Reduced size
                resizeMode: 'contain'  // Ensures the whole image is visible
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}