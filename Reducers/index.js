import { combineReducers } from "redux";
import loginReducer from "./login";
import imgloginReducer from "./uploadImg";
import alert from './alert';
import regReducer from './register';
import ordersListReducer from './ordersList';

const rootReducer = combineReducers ({    
    alert:alert,
    signIn:loginReducer,
    register:regReducer,
    orderList : ordersListReducer,
    upoadedImg: imgloginReducer
})

export default rootReducer;