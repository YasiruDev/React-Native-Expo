import { combineReducers } from "redux";
import loginReducer from "./login";
import imgloginReducer from "./uploadImg";
import alert from './alert'

const rootReducer = combineReducers ({    
    alert:alert,
    signIn:loginReducer,
    upoadedImg: imgloginReducer
})

export default rootReducer;