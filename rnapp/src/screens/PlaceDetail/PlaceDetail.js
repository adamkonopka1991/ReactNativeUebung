import React, {Component} from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity, Platform, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {deletePlace} from '../../store/actions/index';

class PlaceDetail extends Component {
    state= {
        viewMode: "portrait"
    }

    constructor(props)
    {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() 
    {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles= (dims) =>
    {
        this.setState({
            viewMode: dims.window.height>500 ? "portrait" : "landscape"
        });
    }

    placeDeletedHandler= () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        //return form this page:
        this.props.navigator.pop();
    }

    render(){
        return (
            //onRequestClosed is just relevant for Android. clicking the bakc- button closes the modal!
                
            <View style={[styles.container, 
                    this.state.viewMode==="portrait" 
                    ? styles.portraitContainer 
                    : styles.landscapeContainer]}>
                <View style={styles.subContainer}>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
                </View>
                <View style={styles.subContainer}>
                    <View>
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
                
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        margin: 22,
        flex: 1
    },
    portraitContainer:{
        flexDirection: "column"
    },
    landscapeContainer: {
        flexDirection: "row"
    },
    subContainer: {
        flex: 1
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