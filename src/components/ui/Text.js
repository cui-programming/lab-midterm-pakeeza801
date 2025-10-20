//Lab Question A
/*import React from 'react';
import { Text as RNText } from 'react-native';

export default function Text(props) {
  return <RNText {...props} />;
}*/
import React from 'react';
import { Text as RNText } from 'react-native';
// FIX: Corrected path
import { styles } from '../../styles/styles.js';

const Text = ({ children, style, ...props }) => {
  return (
    <RNText style={[styles.baseText, style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;