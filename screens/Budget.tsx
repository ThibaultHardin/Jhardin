import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function BudgetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Créer un budget" onPress={() => alert('Todo: CREATE budget')} />
      <Button title="Rechercher un budget" onPress={() => alert('Todo: SEARCH budget')} />
    </View>
  );
}