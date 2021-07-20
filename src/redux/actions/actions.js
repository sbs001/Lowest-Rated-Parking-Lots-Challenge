import axios from "axios";
import swal from 'sweetalert';

import { GET_PARKING_LOTS, HEADERS, URL_API_PARKING_LOTS } from "../../constants";



export function getParkingLotsByLocation(location) {
    return function(dispatch) {
        return axios.get(URL_API_PARKING_LOTS + location, HEADERS)
            .then((response) => {
                dispatch({
                    type: GET_PARKING_LOTS,
                    payload: response.data,
                });
            })
            .catch((err) => swal('City not found', 'Please, try again', 'warning'));
    };
}