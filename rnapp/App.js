/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlacesInput from './src/components/placesInput/placesInput';
import ListItems from './src/components/ListItems/ListItems';
import placeImage from './src/assets/15_frauenkirche_2.jpg';
//import place image creates a javascript object. path will be correct after deployment on phone
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';



export default class App extends Component {
  state= {
    places: [],
    selectedPlace: null
  }

  placeSubmitHandler= (place) =>
  {
    this.setState(prevState=>{
      return{
        places: prevState.places.concat({
          key: Math.random(), 
          name: place,
          image: {
            uri: "https://blog.365tickets.de/wp-content/uploads/sites/7/2018/03/469345bddb59b1a4cf41dc39ca2a7342-335x160.jpg"
          } //img from web -> we have to set height and width.
        }) //key is obligatory due to the use of FlatList on this array!; @3x @ 2x -> images for the right pixel density
      };
    });
  };

  placeDeletedHandler= () =>
  {
    this.setState(prevState=>{
      return{
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalClosedHandler= () =>
  {
    this.setState({
      selectedPlace: null
    });
  }

  placeSelectedHandler= (key) =>
  {
    this.setState(prevState => {
      return {
        selectedPlace:prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  }

  

  

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace}  
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}/>
        <PlacesInput
          onPlaceAdded={this.placeSubmitHandler} />
        <ListItems 
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //without one takes as much space as items need child-components
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
