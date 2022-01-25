import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      {/* there is no other sibling. */}
      <View style={{ flex: 1, backgroundColor: 'tomato' }}></View>
      <View style={{ flex: 2, backgroundColor: 'green' }}></View>
      <View style={{ flex: 1, backgroundColor: 'gold' }}></View>
    </View>
  );
}
