import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button } from '../ui';

export default function TasbihList({ tasbihs, onUpdateCount }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item.phrase}</Text>
      <Text style={styles.itemCount}>{item.count}</Text>
      <Button title="-" onPress={() => onUpdateCount(item.id, -1)} />
      <Button title="+" onPress={() => onUpdateCount(item.id, 1)} />
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={tasbihs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 15,
    backgroundColor: '#f0f4c3',
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  itemText: { flex: 2, fontSize: 16 },
  itemCount: { flex: 1, textAlign: 'center', fontSize: 16 },
});
