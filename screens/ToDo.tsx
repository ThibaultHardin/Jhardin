import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function ToDoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Créer un rappel" onPress={() => alert('Todo: CREATE todo')} />
      <Button title="Rechercher un rappel" onPress={() => alert('Todo: SEARCH todo')} />
    </View>
  );
}