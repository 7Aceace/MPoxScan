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
            backgroundColor: '#5DB075',
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
              source={focused ? require('../../assets/icons/LibraryA.png') : require('../../assets/icons/LibraryN.png')}
              style={{ 
                width: 30,       // Reduced size
                height: 30,      // Reduced size
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
              source={focused ? require('../../assets/icons/ScanA.png') : require('../../assets/icons/ScanN.png')}
              style={{ 
                width: 70,       // Reduced size
                height: 70,      // Reduced size
                resizeMode: 'contain',  // Ensures the whole image is visible
                marginBottom: 75, // Adjust vertical position
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
              source={focused ? require('../../assets/icons/AboutUsA.png') : require('../../assets/icons/AboutUsN.png')}
              style={{ 
                width: 30,       // Reduced size
                height: 30,      // Reduced size
                resizeMode: 'contain'  // Ensures the whole image is visible
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}