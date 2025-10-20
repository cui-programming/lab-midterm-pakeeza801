
import React from 'react';
import { View as RNView } from 'react-native';

const View = ({ children, style, ...props }) => {
    return (
        <RNView style={style} {...props}>
            {children}
        </RNView>
    );
};

export default View;