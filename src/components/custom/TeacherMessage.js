import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui';

export default function TeacherMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to your Midterm!</Text>
      <Text style={styles.text}>Ensure all tasks A-E are complete.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff8e1',
    borderLeftWidth: 5,
    borderLeftColor: '#ffc107',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
