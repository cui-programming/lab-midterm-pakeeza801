

import React from 'react';
import { Text as RNText, View as RNView, TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Text = ({ children, style, ...props }) => <RNText style={[styles.baseText, style]} {...props}>{children}</RNText>;
export const View = ({ children, style, ...props }) => <RNView style={style} {...props}>{children}</RNView>;
export const Button = ({ children, style, onPress, ...props }) => <RNTouchableOpacity style={style} onPress={onPress} {...props}>{children}</RNTouchableOpacity>;
