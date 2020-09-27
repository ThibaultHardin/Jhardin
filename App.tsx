import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import GardenScreen from './screens/Garden';
import FloraScreen from './screens/Flora';
import FaunaScreen from './screens/Fauna';
import EventScreen from './screens/Events';
import BudgetScreen from './screens/Budget';
import ToDoScreen from './screens/ToDo';
import SettingsScreen from './screens/Settings';
import WeatherScreen from './screens/Weather';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu' }} />
      <Stack.Screen name="Garden" component={GardenScreen} options={{ title: 'Plan du jardin' }} />
      <Stack.Screen name="Flora" component={FloraScreen} options={{ title: 'Plantes' }} />
      <Stack.Screen name="Fauna" component={FaunaScreen} options={{ title: 'Animaux' }} />
      <Stack.Screen name="Events" component={EventScreen} options={{ title: 'Événements' }} />
      <Stack.Screen name="Weather" component={WeatherScreen} options={{ title: 'Météo' }} />
      <Stack.Screen name="Budget" component={BudgetScreen} options={{ title: 'Budget' }} />
      <Stack.Screen name="ToDo" component={ToDoScreen} options={{ title: 'Mes rappels' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Préférences' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
