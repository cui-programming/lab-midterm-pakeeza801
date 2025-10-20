
import React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';

const Button = ({ children, style, onPress, ...props }) => {
    return (
        <RNTouchableOpacity style={style} onPress={onPress} {...props}>
            {children}
        </RNTouchableOpacity>
    );
};

export default Button;