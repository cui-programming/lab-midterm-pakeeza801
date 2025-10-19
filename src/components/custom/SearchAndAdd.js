import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui';

export default function SearchAndAdd() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search & Add Section</Text>
      <Text style={styles.note}>
        Placeholder: Implement text box, buttons, and search here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  note: { fontSize: 14, color: '#666', textAlign: 'center' },
});
