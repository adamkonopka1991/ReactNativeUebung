import React, {Component} from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity, Platform, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';


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
        //chosen location:
        let focusedLocation ={
            latitude: this.props.selectedPlace.location.latitude,
            longitude: this.props.selectedPlace.location.longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
        };
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
                    <MapView
                        style={styles.map}
                        initialRegion={focusedLocation}>
                        <MapView.Marker coordinate={focusedLocation}/>
                    </MapView>
                </View>
                <View style={[styles.subContainer,styles.subContainerSmall]}>
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
        flex: 1,
        justifyContent: "space-between"
    },
    portraitContainer:{
        flexDirection: "column"
    },
    landscapeContainer: {
        flexDirection: "row"
    },
    subContainer: {
        flex: 1,
        margin: 10,
        overflow: "hidden",
        width: "100%"
    },
    subContainerSmall:{
        flex: 0.5
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
    },
    map: {
        height: 200,
        width: "100%"
    }
});

const mapDispatchToProps= dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null,mapDispatchToProps)(PlaceDetail);