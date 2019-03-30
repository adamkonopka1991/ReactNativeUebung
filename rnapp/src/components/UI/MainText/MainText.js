import React from 'react';
import {Text, StyleSheet } from 'react-native';

//Cascading works with text- Components. if i want to change the color, i just do it here, and all text elements wrapped with this components apply this color!
const mainText = props =>(
    <Text style={styles.mainText}>{props.children}</Text>
);

const styles= StyleSheet.create({
    mainText: {
        color: "black",
        backgroundColor: "transparent"
    }
    
});

export default mainText;