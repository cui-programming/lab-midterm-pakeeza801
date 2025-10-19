import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './src/components/ui';

import AboutMe from './src/components/custom/AboutMe';
import TeacherMessage from './src/components/custom/TeacherMessage';
import TasbihList from './src/components/custom/TasbihList';
import SearchAndAdd from './src/components/custom/SearchAndAdd';

const STUDENT_NAME = 'Pakeeza Gul';
const REG_NO = 'SP23-BSE-071';
const initialAzkaar = [
  { id: '1', phrase: 'SubhānAllāh', count: 0 },
  { id: '2', phrase: 'Alhamdullilāh', count: 0 },
  { id: '3', phrase: 'Allāhu Akbar', count: 0 },
  { id: '4', phrase: 'Lā ilāha illā Allāh', count: 0 },
  { id: '5', phrase: 'Astaghfirullāh', count: 0 },
];

export default function App() {
  const [tasbihs, setTasbihs] = useState(initialAzkaar);

  const handleCountUpdate = (id, change) => {
    setTasbihs(prev =>
      prev.map(t => (t.id === id ? { ...t, count: t.count + change } : t))
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}> App is Working!</Text>

      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />
      <TasbihList tasbihs={tasbihs} onUpdateCount={handleCountUpdate} />
      <SearchAndAdd />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  appTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
});
