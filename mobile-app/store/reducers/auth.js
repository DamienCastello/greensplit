import { LOGIN_USER, LOGIN_COMPANY, LOGIN_RUNER, LOGOUT, FORGET_PASSWORD, FORGET_PASSWORD_ERROR} from '../types/auth';

const defaultStates = {
  user: {
    id: 0,
    token: null,
    isAdmin: false,
    isConnected: false
  },
  company: {
    id: 0,
    token: null,
    isAdmin: false,
    isConnected: false
  },
  runer: {
    id: 0,
    token: null,
    isAdmin: false,
    isConnected: false
  }
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: { ...action.payload.user, token: action.payload.token, isConnected: true } };
      case LOGIN_COMPANY:
      return { ...state, company: { ...action.payload.company, token: action.payload.token, isConnected: true } };
      case LOGIN_RUNER:
      return { ...state, runer: { ...action.payload.runer, token: action.payload.token, isConnected: true } };
    case LOGOUT:
      return { ...state, user: defaultStates.user, company: defaultStates.company, runer: defaultStates.runer }; 
    case FORGET_PASSWORD:
      return state;
    case FORGET_PASSWORD_ERROR:
      return state;
      default:
      return state;
  }
};
