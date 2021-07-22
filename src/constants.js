import dotenv from "dotenv";
dotenv.config();

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

//----------------API------------

//CORS problem solution 
export const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com"

export const URL_API = "/v3/businesses";

export const URL_API_PARKING_LOTS = `${URL_API}/search?categories=parking&term=parking&limit=50&location=`

export const HEADERS = {
    'headers': {
        'Authorization': `Bearer ${REACT_APP_API_KEY}`
    }
}


//----------------Redux---------------
//type
export const GET_PARKING_LOTS = "GET_PARKING_LOTS"
export const RESTART_STATE = "RESTART_STATE"