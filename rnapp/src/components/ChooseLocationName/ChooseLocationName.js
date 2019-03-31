/*Interace:
    
*/

import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import DefaultInput from '../UI/DefaultInput/DefaultInput';
import {changePlaceName} from "../../store/actions/index";

class ChooseLocationName extends Component
{
    state= {
        placeName: null
    }

    onPlaceNameChangedHandler = (text)=>
    {
        this.props.onChangedPlaceName(text);
    }

    render ()
    {
        return (
            <View style={styles.container}>
                <DefaultInput placholder="Place Name" onChangeText={this.onPlaceNameChangedHandler} value={this.props.placeName} />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        width: "100%"
    }
})

const mapStateToProps= state =>{
    return{
        placeName: state.places.place.placeName
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        onChangePlaceName: (placeName)=>dispatch(changePlaceName(placeName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChooseLocationName);