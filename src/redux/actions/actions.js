import axios from "axios";
import swal from 'sweetalert';

import { HEADERS, GET_PARKING_LOTS, URL_API_PARKING_LOTS, RESTART_STATE } from "../../constants";
import { refine } from "./utils";



export function getParkingLotsByLocation(location) {
    return function(dispatch) {
        return axios.get(URL_API_PARKING_LOTS + location, HEADERS)
            .then((response) => {
                dispatch({
                    type: GET_PARKING_LOTS,
                    payload: refine(response.data),
                });
            })
            .catch((err) => swal('City not found', 'Please, try again', 'warning'));
    };
}

export function restartState() {
    return {
        type: RESTART_STATE,
    }
}