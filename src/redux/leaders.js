import  * as ActionTypes from '../redux/ActionTypes'

export const LEADERS = (state = {
    isLoading: true,
    errMess: null,
    leader:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADER:
        return {...state, isLoading: false, errMess: null, leader: action.payload};

        case ActionTypes.LEADER_LOADING:
            return {...state, isLoading: true, errMess: null, leader: []}

        case ActionTypes.LEADER_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};



// import { LEADERS } from '../shared/leader';

// export const Leaders = (state = LEADERS, action) => {
//     switch (action.type) {
//         default:
//           return state;
//       }
// };