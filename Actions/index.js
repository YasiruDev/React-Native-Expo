import axios from "axios";
import { AsyncStorage } from "react-native";
import { BASE_URL } from "../config/";

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const IMG = "IMG";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] =
    AsyncStorage.getItem("token") === "" || AsyncStorage.getItem("token") === null
        ? ""
        : `Bearer ${AsyncStorage.getItem("token")}`;


export function regCustomer(data) {
    return function (dispatch, getState) {
        axios.post(`customer/signup`,
            data
        ).then(function (response) {
            if (response.data.status) {
                dispatch(
                    {
                        type: SHOW_NOTIFICATION,
                        payload: { type: "Success", message: response.data.msg }
                    });
                dispatch(
                    {
                        type: REGISTER,
                        payload: response.data
                    });
            } else {
                dispatch(
                    {
                        type: SHOW_NOTIFICATION,
                        payload: { type: "Warning", message: response.data.msg }
                    });
            }
        }).catch(err => {
            dispatch(
                {
                    type: SHOW_NOTIFICATION,
                    payload: { type: "Warning", message: err.message }
                });
        });
    };
}

export function checkAlert(data) {
    return function (dispatch, getState) {

        dispatch(
            {
                type: SHOW_NOTIFICATION,
                payload: { type: "Success", message: "Hi" }
            });
    };
}
export function uploadedImg(data) {
    console.log(" reducer ", data)
    return {
        type: IMG,
        payload: data
    }
}

export function login(data) {
    return {
        type: LOGIN,
        payload: data
    }
}