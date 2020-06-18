import { combineReducers } from "redux";
import loginReducer from "./login";
import imgloginReducer from "./uploadImg";
import alert from './alert';
import regReducer from './register';

const rootReducer = combineReducers ({    
    alert:alert,
    signIn:loginReducer,
    register:regReducer,
    upoadedImg: imgloginReducer
})

export default rootReducer;