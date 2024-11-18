import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutUsScreen from './app/(tabs)/aboutus';
import ExploreScreen from './app/(tabs)/explore';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}