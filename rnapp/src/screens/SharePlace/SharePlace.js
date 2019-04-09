import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView, StyleSheet, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {connect} from 'react-redux';

import { addPlace } from '../../store/actions/index';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import validate from "../../utility/validation";


class SharePlaceScreen extends Component {
    static navigatorStyle= {
        navBarButtonColor: "orange"
    }

    state= {
        controls:{
            placeName:{
                value: "",
                validationRules:{
                    minLength: 3
                },
                valid: false,
                touched: false
            }
        }
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent= event =>{
        if(event.type==="NavBarButtonPress")
        {
            if(event.id==="sideDrawerToggle")
            {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }

    inputChangedHandler= (value,key) =>
    {
        this.setState(prevState =>{
            return {
                controls: {
                    ...prevState.controls,
                    [key]:{
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value,this.state.controls[key].validationRules),
                        touched: true
                    }
                }
            }
        })
    }


    placeAddedHandler = () => {
        if(this.state.controls.placeName.value.trim() !== "" )
        {
            this.props.onAddPlace(this.state.controls.placeName.value);
        }    
    }

    render () {
        return(
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <MainText>
                            <HeadingText>
                                Share a Place with us!
                            </HeadingText>
                        </MainText>
                        <PickImage />
                        <PickLocation />
                        <DefaultInput
                            value={this.state.controls.placeName.value} 
                            onChangeText={(value)=>this.inputChangedHandler(value, "placeName")}
                            valid={this.state.controls.placeName.valid}
                            touched={this.state.controls.placeName.touched} />
                        <View style={styles.button}>
                            <Button 
                                title="Share the place!" 
                                onPress={this.placeAddedHandler}
                                disabled={!this.state.controls.placeName.valid} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        );//view in scrollview: otherwise scrolling is not working for android.
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

const mapDispatchToProps= dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);