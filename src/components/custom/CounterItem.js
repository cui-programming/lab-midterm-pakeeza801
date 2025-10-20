
import React from 'react';
import { styles } from '../../styles/styles.js'; 
import Text from '../ui/Text.js';
import View from '../ui/View.js';
import Button from '../ui/Button.js';

const CounterItem = ({ name, count, onIncrement, onDecrement }) => {
  return (
    <View style={styles.counterItem}>
      <Text style={styles.counterItemText}>{name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
        <Button 
          style={[styles.button, styles.minusButton]} 
          onPress={onDecrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </Button>

        
        <Text style={styles.counterValueText}>{count}</Text>

      
        <Button 
          style={[styles.button, styles.plusButton]} 
          onPress={onIncrement}
        >
          <Text style={styles.buttonText}>+</Text>
        </Button>
      </View>
    </View>
  );
};

export default CounterItem;