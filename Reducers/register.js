import { REGISTER } from '../Actions';

export default function (state = null, action) {
    switch (action.type) {
        case REGISTER:
            return action.payload;
        default:
            return state;
    }
}