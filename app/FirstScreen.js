
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FruitScreen from './FruitScreen';
import AnimalScreen from './AnimalScreen';
import CountriesScreen from './CountriesScreen';
import LeaderboardScreen from './LeaderBoardScreen';
import GameScreen from './GameScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function FirstScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTitleAlign: 'center', 
      }}>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Fruit" component={FruitScreen} />
        <Stack.Screen name="Animal" component={AnimalScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="Games" component={GameScreen} />
        <Stack.Screen name="LeaderBoard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
