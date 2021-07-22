import { URL_API_PARKING_LOTS } from "../../constants";


export const refine = (arrYelp) => {
    return arrYelp.businesses.map(element => {
        return {
            name: element.name,
            rating: element.rating,
            reviewCount: element.review_count,
            yelpUrl: element.url,
            img: element.image_url,
            address: element.location.address1,
            phone: element.phone,
            isOpen: element.is_closed,
            score: ((element.review_count * element.rating) / (element.review_count + 1)).toFixed(2)
        }
    })
}

export const generateUrl = (location, page) => {
    if (page > 0) page--;
    console.log(URL_API_PARKING_LOTS + location + '&offset=' + page)
    return URL_API_PARKING_LOTS + location + '&offset=' + page
}