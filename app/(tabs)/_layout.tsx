import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';

export default function TabLayout() {
  // Get screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // Calculate proportional sizes
  const tabBarHeight = screenHeight * 0.1; // 10% of screen height
  const iconSize = screenWidth * 0.075; // 7.5% of screen width for regular icons
  const centerIconSize = screenWidth * 0.2; // 20% of screen width for center icon
  const labelFontSize = screenWidth * 0.03; // 3% of screen width for labels

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#5DB075',
          height: tabBarHeight,
          paddingBottom: tabBarHeight * 0.125, // 12.5% of tab bar height for padding
        },
        tabBarLabelStyle: {
          fontSize: labelFontSize,
          marginTop: -tabBarHeight * 0.0625, // 6.25% of tab bar height for margin
        },
      }}
    >
      <Tabs.Screen
        name="library"
        options={{
          tabBarLabel: 'Library',
          tabBarLabelStyle: {
            marginTop: tabBarHeight * 0.1875, // 18.75% of tab bar height
          },
          headerShown: true,
          headerTitle: 'Library', 
          headerStyle: {
            backgroundColor: '#5DB075',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontSize: labelFontSize * 1.67, // Larger than tab labels
            fontFamily: 'Inter-SemiBold',
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: tabBarHeight * 0.3125, alignSelf: 'center' }}>
              <Image
                source={
                  focused
                    ? require('../../assets/icons/LibraryA.png')
                    : require('../../assets/icons/LibraryN.png')
                }
                style={{
                  width: iconSize,
                  height: iconSize,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={props.onPress}>
              <View style={{ flex: 1, alignItems: 'center' }}>{props.children}</View>
            </TouchableWithoutFeedback>
          )
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', marginTop: -tabBarHeight * 0.3125 }}>
              <Image
                source={
                  focused
                    ? require('../../assets/icons/ScanA.png')
                    : require('../../assets/icons/ScanN.png')
                }
                style={{
                  width: centerIconSize,
                  height: centerIconSize,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={props.onPress}>
              <View style={{ flex: 1, alignItems: 'center' }}>{props.children}</View>
            </TouchableWithoutFeedback>
          )
        }}
      />

      <Tabs.Screen
        name="aboutus"
        options={{
          tabBarLabel: 'About Us',
          tabBarLabelStyle: {
            marginTop: tabBarHeight * 0.1875, // 18.75% of tab bar height
          },
          headerShown: true,
          headerTitle: 'About Us', 
          headerStyle: {
            backgroundColor: '#5DB075',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontSize: labelFontSize * 1.67,
            fontFamily: 'Inter-SemiBold',
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: tabBarHeight * 0.3125 }}>
              <Image
                source={
                  focused
                    ? require('../../assets/icons/AboutUsA.png')
                    : require('../../assets/icons/AboutUsN.png')
                }
                style={{
                  width: iconSize,
                  height: iconSize,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={props.onPress}>
              <View style={{ flex: 1, alignItems: 'center' }}>{props.children}</View>
            </TouchableWithoutFeedback>
          ) 
        }}
      />
    </Tabs>
  );
}
