/*Interface:
    props.style (optional)
    props.title
    props.onPress
*/

import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const standardButton= props =>(
    <View style={[styles.container, props.style]}>
        <Button title={props.title} onPress={props.onPress} />
    </View>
);

const styles= StyleSheet.create({
    container: {
        margin: 8
    }
})

export default standardButton;