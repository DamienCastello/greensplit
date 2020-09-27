import { combineReducers } from "redux";
import auth from './auth';
import products from './product';
import users from './users';


export default combineReducers({
    auth,
    products,
    users,
});
