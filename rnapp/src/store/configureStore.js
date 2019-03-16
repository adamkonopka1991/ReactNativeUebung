import { createStore, combineReducers } from 'redux';

import placesReducer from './reducers/places';

//funtion you can pass arguments to, to configure the store dynamically. Eg different configs for Iphone and Android

const rootReducer= combineReducers({
    places: placesReducer
});

const configureStore= () =>{
    return createStore(rootReducer);
}

export default configureStore;
