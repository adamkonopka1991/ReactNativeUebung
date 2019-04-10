import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';

const initialState= {
    places: []
};

const reducer= (state= initialState,action) =>
{
    switch (action.type)
    {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image: {
                      uri: "https://blog.365tickets.de/wp-content/uploads/sites/7/2018/03/469345bddb59b1a4cf41dc39ca2a7342-335x160.jpg"
                    },
                    location: action.location
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