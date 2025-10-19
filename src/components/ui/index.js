// Barrel exports for UI components.
// Intentionally missing the export for './Text' (students must add it).
//export { default as Button } from './Button';
//export { default as TextInput } from './TextInput';
// export { default as Text } from './Text'; // <-- students will uncomment/add this
// src/components/ui/index.js
// This is the UI barrel file that exports all UI components

// Import Text from React Native

//import { Text } from 'react-native';
export { default as Text } from './Text';
export { default as Button } from './Button';
// export { default as TextInput } from './TextInput'; // if you have it

//  Re-export Text so other files can import it from here
//export { Text };


// If you have other components in this folder, export them too
// export { default as Button } from './Button';
// export { default as TextInput } from './TextInput';
