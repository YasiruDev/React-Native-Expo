import axios from "axios";
import { AsyncStorage } from "react-native";
import { BASE_URL } from "../config/";

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";
export const ORDER_LIST = "ORDER_LIST";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const IMG = "IMG";

axios.defaults.baseURL = BASE_URL;
extratToken();

async function extratToken() {
    console.log("Async token --->",await AsyncStorage.getItem("token"))
    return axios.defaults.headers.common["Authorization"] = 
    await AsyncStorage.getItem("token") === "" || await AsyncStorage.getItem("token") === null
    ? ""
    :`Bearer ${await AsyncStorage.getItem("token")}`
}

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

export function login(data) {
    return function (dispatch, getState) {
        axios.post(`customer/login`,
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
                        type: LOGIN,
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

export function getOrderList() {
    return function (dispatch, getState) {
        axios.get(`protected/customer/order-list`
        ).then(function (response) {
            if (response.data.status) {
                dispatch({ type: ORDER_LIST, payload: response.data });
            }
            else {
                dispatch({
                    type: SHOW_NOTIFICATION,
                    payload: { type: "danger", message: response.data.msg }
                });
            }

        }).catch(function (error) {
            dispatch({
                type: SHOW_NOTIFICATION,
                payload: { type: "danger", message: error }
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

