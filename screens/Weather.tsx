import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function WeatherScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>La météo du moment</Text>
    </View>
  );
}