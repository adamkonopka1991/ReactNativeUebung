/*Interace:
    onLocationChange

*/

import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Placeholder from "../UI/Placeholder/Placeholder";
import StandardButton from "../UI/StandardButton/StandardButton";

const chooseLocation= props =>(
    <View style={styles.container}>
        <Placeholder>
            <Text>Map</Text>
        </Placeholder>
        <StandardButton title="Get Location" onPress={props.onLocationChange} />
    </View>
    
     
);

const styles= StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    }
})

export default chooseLocation;