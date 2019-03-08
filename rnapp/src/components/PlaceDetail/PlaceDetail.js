import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const placeDetail= props =>{
    let modalContent= null;

    if(props.selectedPlace)
    {
        modalContent= (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
       );
    }

    return (
        //onRequestClosed is just relevant for Android. clicking the bakc- button closes the modal!
        <Modal
            onRequestClose={props.onModalClosed} 
            visible={props.selectedPlace !== null} 
            animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="Close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    );
};

const styles= StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        height: 200,
        width: "100%"
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
})

export default placeDetail;