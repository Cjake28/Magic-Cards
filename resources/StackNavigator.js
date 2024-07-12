import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, BackHandler, ImageBackground, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import HomeScreen from './Home';
import SetupScreens from './SetupScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator(stack){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true
          }} 
        />
        <Stack.Screen 
          name="Setup" 
          component={SetupScreens} 
          options={{ 
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}