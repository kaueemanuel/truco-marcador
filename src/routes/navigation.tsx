import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Main from '../pages/main/main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSettings } from '../context/settings';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { theme } = useSettings();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: '' }}
        />
      </Stack.Navigator>
      <StatusBar style={theme.name === 'dark' ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}
