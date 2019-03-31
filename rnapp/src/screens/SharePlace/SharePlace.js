import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';

import { addPlace } from '../../store/actions/index';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import ChooseImage from "../../components/ChooseImage/ChooseImage";
import ChooseLocation from "../../components/ChooseLocation/ChooseLocation";
import ChooseLocationName from "../../components/ChooseLocationName/ChooseLocationName";
import StandardButton from "../../components/UI/StandardButton/StandardButton";
import imagePlaceHolder from "../../assets/15_frauenkirche_2.jpg";

class SharePlaceScreen extends Component {
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

    placeAddedHandler = () => {
        this.props.onAddPlace()
    }

    render () {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>
                            Share a Place with us!
                        </HeadingText>
                    </MainText>
                    <ChooseImage/>
                    <ChooseLocation />
                    <ChooseLocationName />
                    <StandardButton title="Share Place!!" onPress={()=>this.placeAddedHandler()}/>
                </View>
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
        onAddPlace: () => dispatch(addPlace())
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);