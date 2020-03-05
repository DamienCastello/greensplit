import { LOGIN, LOGOUT, FORGET_PASSWORD, FORGET_PASSWORD_ERROR} from '../types/auth';

const defaultStates = {
  user: {
    id: 0,
    token: null,
    isAdmin: false,
    isConnected: false
  }
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: { ...action.payload.user, token: action.payload.token, isConnected: true } };
    case LOGOUT:
      return { ...state, user: defaultStates.user }; 
    case FORGET_PASSWORD:
      return state;
    case FORGET_PASSWORD_ERROR:
      return state;
      default:
      return state;
  }
};
