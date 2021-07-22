import axios from "axios";
import swal from 'sweetalert';

import { HEADERS, GET_PARKING_LOTS } from "../../constants";
import { generateUrl, refine } from "./utils";



export function getParkingLotsByLocation(location, page = 0) {
    return function(dispatch) {
        return axios.get(generateUrl(location, page), HEADERS)
            .then((response) => {
                dispatch({
                    type: GET_PARKING_LOTS,
                    payload: refine(response.data),
                });
            })
            .catch((err) => swal('City not found', 'Please, try again', 'warning'));
    };
}