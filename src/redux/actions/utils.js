export const refine = (arrYelp) => {
    return arrYelp.businesses.map(element => {
        return {
            name: element.name,
            rating: element.rating,
            reviewCount: element.review_count,
            yelpUrl: element.url,
            img: element.image_url,
            address: element.address1,
        }
    })
}