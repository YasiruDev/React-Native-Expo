import { IMG } from '../Actions';

export default function (state = null, action) {
    switch (action.type) {
        case IMG:
            return action.payload;
        default:
            return state;
    }
}