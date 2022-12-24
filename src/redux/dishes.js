//import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading: true,
    errmess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
             return {...state, isLoading:false, errMess: null, dishes: action.payload}

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading:true, errMess: null, dishes: []}
// spread operator '...state' tends to return the original state of an action
        case ActionTypes.DISHES_FAILED:
             return {...state, isLoading:false, errMess: action.payload, dishes: []}
        default:
          return state;
      }
};