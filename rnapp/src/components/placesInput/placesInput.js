import React, { Component } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

class PlacesInput extends Component{

    state={
        placeName:''
    }

    placeNameChangedHandler = (val) =>{ //das event ist nur der text, kein Objekt.
        this.setState({
          placeName: val
        });
      };

    placeSubmitHandler= () =>
    {
        if(this.state.placeName.trim()==="")
        {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    }

    render()
    {
        return (
            <View style={styles.placesInput}>
                <TextInput
                    placeholder= "Enter a Place"
                    value= {this.state.placeName}
                    onChangeText= {this.placeNameChangedHandler}
                    style={styles.placeTextInput} />
                <Button 
                    title= "Add"
                    onPress={this.placeSubmitHandler}
                    style={styles.placeButton} />
            </View>
        );
    }


} 


const styles= StyleSheet.create({
    placesInput:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeTextInput:{
        width: "70%"
    },
    placeButton:{
        width: "30%"
    }
});



export default PlacesInput;