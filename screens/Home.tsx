import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenue dans votre jardin!</Text>
      <Button title="Plan du jardin" onPress={() => navigation.navigate('Garden')} />
      <Button title="Plantes" onPress={() => navigation.navigate('Flora')} />
      <Button title="Animaux" onPress={() => navigation.navigate('Fauna')} />
      <Button title="Évènements" onPress={() => navigation.navigate('Events')} />
      <Button title="Météo" onPress={() => navigation.navigate('Weather')} />
      <Button title="Budget" onPress={() => navigation.navigate('Budget')} />
      <Button title="À faire..." onPress={() => navigation.navigate('ToDo')} />
    </View>
  );
}
