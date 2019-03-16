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
import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/15_frauenkirche_2.jpg';
//import place image creates a javascript object. path will be correct after deployment on phone
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';


class App extends Component {

  placeAddedHandler= (placeName) =>
  {
    this.props.onAddPlace(placeName);
    console.log("Place was added!");
  };

  placeDeletedHandler= () =>
  {
    this.props.onDeletePlace();
  };

  modalClosedHandler= () =>
  {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler= (key) =>
  {
    this.props.onSelectPlace(key);
  }

  

  

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}  
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}/>
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.props.places}
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

const mapStateToProps= state =>{
  return {
    places: state.places.places,
    selectedPlace:state.places.selectedPlace
  };
};

const mapDispatchToProps= dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
