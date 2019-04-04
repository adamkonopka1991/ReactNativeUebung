import React, {Component} from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {deletePlace} from '../../store/actions/index';

class PlaceDetail extends Component {

    placeDeletedHandler= () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        //return form this page:
        this.props.navigator.pop();
    }

    render(){
        return (
            //onRequestClosed is just relevant for Android. clicking the bakc- button closes the modal!
                
            <View style={styles.container}>
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={styles.deleteButton}>
                            <Icon 
                                size={30} 
                                name={Platform.OS==="android" ? "md-trash" : "ios-trash"} 
                                color="red"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
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
    },
    deleteButton: {
        alignItems: "center"
    }
});

const mapDispatchToProps= dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null,mapDispatchToProps)(PlaceDetail);