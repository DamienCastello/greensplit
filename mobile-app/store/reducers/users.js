import { 
    FETCH_USER,
    ERROR_ON_USER,
  } from '../types/users';
  
  const defaultStates = {
    user: {},
    users: []
  };
  
  export default function (state = defaultStates, action) {
    switch (action.type) {
      case FETCH_USER:
        return  { ...state, user: { ...action.payload.user } };
      case ERROR_ON_USER:
        console.log("enter in error user reducer");
        return state;
      default:
        return state;
    }
  };