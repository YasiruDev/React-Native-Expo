import { combineReducers } from "redux";
import loginReducer from "./login";

const rootReducer = combineReducers ({    
    signIn:loginReducer
})

export default rootReducer;