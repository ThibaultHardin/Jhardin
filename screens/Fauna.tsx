import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function FaunaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button title="Créer un animal" onPress={() => alert('Todo: CREATE fauna sheet')} />
    <Button title="Consulter un animal" onPress={() => alert('Todo: DISPLAY fauna sheet')} />
    </View>
  );
}