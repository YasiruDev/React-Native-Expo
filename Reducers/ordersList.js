import { ORDER_LIST } from '../Actions';

export default function (state = null, action) {
    switch (action.type) {
        case ORDER_LIST:
            return action.payload;
        default:
            return state;
    }
}