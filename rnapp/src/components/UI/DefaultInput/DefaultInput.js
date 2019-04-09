import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput= props => (
    <TextInput
        {...props}
        style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]} 
        underlineColorAndroid="transparent"/>
);//...props MUST stand before style! otherwise customized styles will overwrite default styles! [styles.input, props.styles], style can also take an array. styles.input gets merged with props.input; ORDER MATTERS!

const styles= StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: "red"
    }
});

export default defaultInput;