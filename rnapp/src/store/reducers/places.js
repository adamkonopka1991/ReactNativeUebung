import {ADD_PLACE, DELETE_PLACE, CHANGE_PLACE} from '../actions/actionTypes';

const initialState= {
    places: [],
    place: {
        name: null,
        image: null
    }
};

const reducer= (state= initialState,action) =>
{
    switch (action.type)
    {
        case CHANGE_PLACE:
        return {
            ...state,
            place: {
                name: action.placeName,
                image: action.placeImage
            }
        };

        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    ...state.place
                })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey
                  })
            };

        
        default:
            return state;
    }
};

export default reducer;