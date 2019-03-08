import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
//if image imported locally, react will take the images width and height of the image where it renders it,
// if from the web:have to set a height!

//to apply any significant styling I need the view- Component! Text is limited!

const listItem= (props) =>(
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles= StyleSheet.create({
    listItem:{
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30 //maximum height and widht
    }
});

export default listItem;