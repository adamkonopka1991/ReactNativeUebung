import {ADD_PLACE, DELETE_PLACE, CHANGE_PLACE_NAME } from './actionTypes';

// Actions that are related to places

export const changePlaceName= (placeName) => {
    return{
        type: CHANGE_PLACE_NAME,
        placeName: placeName
    }
}

export const changePlaceImage= (placeImage) => {
    return{
        type: CHANGE_PLACE_NAME,
        placeImage: placeImage
    }
}

export const addPlace = () => {
    return{
        type: ADD_PLACE
    };
};

export const deletePlace= (key) =>{
    return{
        type: DELETE_PLACE,
        placeKey: key
    };
};

