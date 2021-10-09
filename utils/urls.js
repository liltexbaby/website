export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://jonathan-pinto-backend.herokuapp.com'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_5127AB4C99101F17'
/**
 * 
 * @param {any} image 
 */


export const fromImageToUrl = (image) => {

    if (!image){
        return "/vercel.svg"
    }

    if (image.url.indexOf("/") === 0){
        return `${API_URL}${image.url}`
    }

    return image.url


}