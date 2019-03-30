import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

class SideDrawer extends Component {
    render() {
        return (
            <View style={[styles.container, {width: Dimensions.get("window").width*0.8}]}>
                <Text>Side Drawer</Text>
            </View>
        );//Dimensions: fix for android, otherwise the drawer wont appear.// pass an array. Must be in style expression. turning the phone -> width has another value
    }
}

const styles= StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1
    }
})

export default SideDrawer;