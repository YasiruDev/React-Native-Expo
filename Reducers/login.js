import { LOGIN } from '../Actions';
import { AsyncStorage } from "react-native";
export default function (state = null, action) {
    switch (action.type) {
        case LOGIN:
            console.log("client token-->", action.payload.data.token)
            AsyncStorage.setItem("token", action.payload.data.token)
            return action.payload;
        default:
            return state;
    }
}