import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui';

export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{regNo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0f7fa',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
