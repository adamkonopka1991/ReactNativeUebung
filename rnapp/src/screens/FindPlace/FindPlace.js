import React, {Component} from 'react';
import {View,Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';
import startTabs from '../MainTabs/startMainTabs';

class FindPlaceScreen extends Component {
    static navigatorStyle= {
        navBarButtonColor: "orange"
    }

    state={
        placesLoaded: false,
        removeAnim: new Animated.Value(1), //value we can use on a styling property that will be automatically managed by react
        showListAnim: new Animated.Value(0)
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    placesLoadedHandler= () =>
    {
        Animated.timing(this.state.showListAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();

    }

    placesSearchHandler= () =>
    {
        Animated.timing(this.state.removeAnim, { //timing over which the animation will occur; pass the value, react should change automatically
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() =>{
            this.setState({
                placesLoaded: true
            });
            this.placesLoadedHandler();
        }); //pass a function, that will be executed, once the animation is done
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

    itemSelectedHandler= key =>{
        const selPlace= this.props.places.find(place => {
            return place.key===key;
            });
        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            } //will be merged with my regular props. Ie props from redux

        });
    }

    render () {

        let content= (
            <Animated.View
                style={{
                    opacity: this.state.removeAnim,
                    transform: [
                        {
                            scale: this.state.removeAnim.interpolate({
                                inputRange: [0,1],
                                outputRange: [12,1]
                            })
                        }
                    ]
                }}>
                <TouchableOpacity onPress={this.placesSearchHandler}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>

        );

        if(this.state.placesLoaded)
        {
            content= (
                <Animated.View
                    style={{
                        opacity: this.state.showListAnim
                    }}>
                    <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
                </Animated.View>    
            );
        }

        return(
            <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
                {content}
            </View>
        );
    }
}

const styles= StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "orange",
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
})

const mapStateToProps= state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);