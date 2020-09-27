import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function FloraScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Créer une plante" onPress={() => alert('Todo: CREATE flora sheet')} />
      <Button title="Consulter une plante" onPress={() => alert('Todo: DISPLAY flora sheet')} />
    </View>
  );
}