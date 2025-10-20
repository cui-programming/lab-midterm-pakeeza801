//Lab Question A

/*import { View, StyleSheet } from 'react-native';
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
});*/

//Question B
/*import React from "react";

const TeacherMessage = () => {
  return (
    <div style={{
      background: "#f9f9f9",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "8px"
    }}>
      <h2>Teacher's Message</h2>
      <p>
        Welcome to the course! Keep learning and practicing consistently.
      </p>
      <span style={{
        color: "blue",
        fontWeight: "bold"
      }}>
        Important
      </span>
    </div>
  );
};

export default TeacherMessage;*/

//Question C
/*import React from "react";

function TeacherMessage() {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "10px",
      }}
    >
      <h2>Teacher’s Message</h2>
      <p>Keep learning React — every line you write is progress!</p>
    </div>
  );
}

export default TeacherMessage;*/

// Question D
/*import React from 'react';

export default function TeacherMessage() {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "10px",
        border: "1px solid #e5e7eb", // gray-200
      }}
    >
      <h2 style={{ color: '#1f2937' }}>Teacher’s Message</h2>
      <p style={{ color: '#4b5563' }}>Keep learning React — every line you write is progress!</p>
    </div>
  );
}*/


import React from 'react';
// FIX: Corrected path and added .js extension
import { styles } from '../../styles/styles.js'; 
import Text from '../ui/Text.js';
import View from '../ui/View.js';

const TeacherMessage = () => {
  return (
    <View style={styles.card}> 
      <Text style={styles.cardHeader}>Teacher's Message</Text>
      <Text style={styles.cardBodyText}>Keep learning React — every line you write is progress!</Text>
    </View>
  );
};

export default TeacherMessage;