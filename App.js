import { NavigationContainer } from "@react-navigation/native"
import "./global.css"
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}


