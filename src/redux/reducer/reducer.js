import { GET_PARKING_LOTS, RESTART_STATE } from "../../constants";

const InitialState = {
    parkingLots: []
};

export default function rootReducer(state = InitialState, action) {

    if (action.type === GET_PARKING_LOTS)
        return {
            ...state,
            parkingLots: action.payload
        }
    if (action.type === RESTART_STATE)
        return {
            ...state,
            parkingLots: []
        }
    return state;
}