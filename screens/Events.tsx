import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function EventScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Créer un évènement" onPress={() => alert('Todo: CREATE event')} />
      <Button title="Rechercher un évènement" onPress={() => alert('Todo: SEARCH event')} />
    </View>
  );
}