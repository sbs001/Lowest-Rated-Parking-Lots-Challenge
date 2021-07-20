import { GET_PARKING_LOTS } from "../../constants";

const InitialState = {
    parkingLots: []
};

export default function rootReducer(state = InitialState, action) {

    if (action.type === GET_PARKING_LOTS)
        return {
            ...state,
            parkingLots: action.payload
        }
    return state;
}