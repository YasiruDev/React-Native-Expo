import { SHOW_NOTIFICATION,CLEAR_NOTIFICATION } from "../Actions";

export default function (state = {}, action) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return action.payload;
        case CLEAR_NOTIFICATION:
            return {};
        default:
            return state;
    }
}
