export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";
export const LOGIN = "LOGIN";
export const IMG = "IMG";

export function checkAlert(data) {
    return function (dispatch, getState) {
        dispatch(
            {
              type: SHOW_NOTIFICATION,
              payload: { type: "success", message: "Hi" }
            });
    };
}
export function uploadedImg(data) {
    console.log(" reducer ",data)
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