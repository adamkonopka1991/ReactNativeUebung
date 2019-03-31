/*Interace:
    props.children
    props.style (optional)
*/

import React from 'react';
import {View, StyleSheet} from 'react-native';

const placeholder= props =>(
    <View style={[styles.container, props.style]}>
        {props.children}
    </View>
);

const styles= StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    }
})

export default placeholder;