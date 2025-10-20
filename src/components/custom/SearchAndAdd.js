

import React, { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { styles } from '../../styles/styles.js'; 
import Text from '../ui/Text.js';
import View from '../ui/View.js';
import Button from '../ui/Button.js';

const SearchAndAdd = ({ onAddPhrase, onSearchChange }) => {
  const [newPhrase, setNewPhrase] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleAdd = () => {
    if (newPhrase.trim()) {
      onAddPhrase(newPhrase.trim());
      setNewPhrase(''); 
    }
  };

  const handleSearch = (text) => {
    setSearchPhrase(text);
    onSearchChange(text);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>D. Search & Add</Text>
      
    
      <Text style={styles.inputLabel}>Search Phrase (Filters List Below)</Text>
      <RNTextInput
        style={styles.input}
        placeholder="Type to filter..."
        value={searchPhrase}
        onChangeText={handleSearch}
      />

      {/* Add Box */}
      <Text style={styles.inputLabel}>Add New Unique Phrase</Text>
      <View style={styles.addRow}>
        <RNTextInput
          style={[styles.input, styles.addRowInput]}
          placeholder="e.g., Astaghfirullah"
          value={newPhrase}
          onChangeText={setNewPhrase}
          onSubmitEditing={handleAdd}
        />
        <Button style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add</Text>
        </Button>
      </View>
    </View>
  );
};

export default SearchAndAdd;