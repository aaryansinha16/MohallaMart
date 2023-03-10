import axios from "axios"
import { WISHLIST_ERROR, WISHLIST_LOADING, WISHLIST_SUCCESS } from "./wishlist.types"

export const getWishlistAction = (userId) => async (dispatch) => {
    dispatch({type: WISHLIST_LOADING})
    try{
        let data = await axios.get(`https://helpful-tan-cricket.cyclic.app/wishlist?userId=${userId}`)
        dispatch({type: WISHLIST_SUCCESS, payload : data.data})
        return data.data
    }catch(e){
        dispatch({type: WISHLIST_ERROR, payload : e.response.message})
        return e.response.message
    }
}

export const postWishlistAction = (userId, productId) => async(dispatch) => {
    dispatch({type: WISHLIST_LOADING})
    try{
        let data = await axios.post(`https://helpful-tan-cricket.cyclic.app/wishlist/new-item`, {userId, productId})
        dispatch({type: WISHLIST_SUCCESS, payload: data.data})
        return data.data
    }catch(e){
        dispatch({type: WISHLIST_ERROR, payload : e.response.message})
        return e.response.message
    }
}