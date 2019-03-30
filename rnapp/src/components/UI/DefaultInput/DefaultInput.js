import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput= props => (
    <TextInput
        {...props}
        style={[styles.input, props.style]} 
        underlineColorAndroid="transparent"/>
);//...props MUST stand before style! otherwise customized styles will overwrite default styles! [styles.input, props.styles], style can also take an array. styles.input gets merged with props.input; ORDER MATTERS!

const styles= StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8
    }
});

export default defaultInput;