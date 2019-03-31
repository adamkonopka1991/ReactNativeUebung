/*Interface:
    props.imageSource
    props.onImageChange

*/

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Placeholder from '../UI/Placeholder/Placeholder';
import StandardButton from '../UI/StandardButton/StandardButton';

const chooseImage= props => (
    <View style={styles.container}>
        <Placeholder>
            <Image source={props.imageSource} style={styles.previewImage} />
        </Placeholder>
        <StandardButton title="Change Image" onPress={props.onImageChange} />
    </View>
);

const styles= StyleSheet.create({
   container: {
       flex: 1,
       alignItems: "center",
       width: "100%"
   },
   previewImage: {
       width: "100%",
       height: "100%"
   }
})

export default chooseImage;