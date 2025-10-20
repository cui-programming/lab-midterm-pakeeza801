
import React, { useState, useMemo } from 'react';
import { SafeAreaView, ScrollView, Alert } from 'react-native';


import { MY_NAME, MY_REG_NO } from './src/config/student.js'; 
import { initialTasbihs } from './src/constants/data.js';


import { styles } from './src/styles/styles.js';

import Text from './src/components/ui/Text.js';
import View from './src/components/ui/View.js';

import TeacherMessage from './src/components/custom/TeacherMessage.js';
import SearchAndAdd from './src/components/custom/SearchAndAdd.js';
import CounterItem from './src/components/custom/CounterItem.js';

const App = () => {
  const [tasbihs, setTasbihs] = useState(initialTasbihs);
  const [searchFilter, setSearchFilter] = useState('');

  
  const updateCount = (id, delta) => {
    setTasbihs(prevTasbihs =>
      prevTasbihs.map(item =>
        item.id === id ? { ...item, count: Math.max(0, item.count + delta) } : item
      )
    );
  };

  const handleIncrement = (id) => updateCount(id, 1);
  const handleDecrement = (id) => updateCount(id, -1);

  
  const handleAddPhrase = (name) => {
    const exists = tasbihs.some(item => item.name.toLowerCase() === name.toLowerCase());
    if (exists) {
      Alert.alert(`Phrase Exists`, `'${name}' is already in the list.`);
      return;
    }

    const newId = tasbihs.length > 0 ? Math.max(...tasbihs.map(t => t.id)) + 1 : 1;
    const newTasbih = { id: newId, name, count: 0 };
    setTasbihs(prevTasbihs => [...prevTasbihs, newTasbih]);
  };

  const handleSearchChange = (filter) => {
    setSearchFilter(filter.toLowerCase());
  };

  const filteredTasbihs = useMemo(() => {
    if (!searchFilter) {
      return tasbihs;
    }
    return tasbihs.filter(item =>
      item.name.toLowerCase().includes(searchFilter)
    );
  }, [tasbihs, searchFilter]);

  
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        
        <Text style={{ ...styles.cardHeader, alignSelf: 'center', fontSize: 28, fontWeight: '900', color: styles.baseText.color }}>
          My Tasbih App 
        </Text>

    
        <View style={styles.personalHeaderContainer}>
            <Text style={styles.personalHeaderText}>{"Pakeeza Gul"}</Text>
            <Text style={styles.personalHeaderText}>{"SP23-BSE-071"}</Text>
        </View>

      
        <View style={[styles.card, styles.aboutMeCard]}>
          <Text style={styles.cardHeader}>About Me</Text>
          <Text style={styles.cardBodyText}>Hello! I'm learning React and building my own Tasbih Counter app.</Text>
        </View>

        
        <TeacherMessage /> 

        
        <SearchAndAdd
          onAddPhrase={handleAddPhrase}
          onSearchChange={handleSearchChange}
        />

    
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Tasbih Counter</Text>
          {filteredTasbihs.map((item) => (
            <CounterItem
              key={item.id}
              name={item.name}
              count={item.count}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
            />
          ))}
          {filteredTasbihs.length === 0 && searchFilter.length > 0 && (
            <Text style={{ textAlign: 'center', padding: 10 }}>No matching phrases found.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;