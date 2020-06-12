export const LOGIN = "LOGIN";

export function login(data) {
    return {
        type: LOGIN,
        payload: data
    }
}