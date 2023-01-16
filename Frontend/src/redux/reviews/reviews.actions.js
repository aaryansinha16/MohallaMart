import axios from "axios"
import { REVIEW_GET_ERROR, REVIEW_GET_LOADING, REVIEW_GET_SUCCESS, REVIEW_POST_ERROR, REVIEW_POST_LOADING, REVIEW_POST_SUCCESS } from "./reviews.types"

export const getReviewsAction = (productId) => async (dispatch) => {
    dispatch({type: REVIEW_GET_LOADING})
    try{
        let data = await axios.get(`https://helpful-tan-cricket.cyclic.app/reviews?productId=${productId}`)
        dispatch({type: REVIEW_GET_SUCCESS , payload: data.data})
        return data.data
    }catch(e){
        dispatch({type: REVIEW_GET_ERROR})
        return e.response.message
    }
}

export const postReviewAction = (payload) => async(dispatch) => {
    dispatch({type: REVIEW_POST_LOADING})
    try{
        let data = await axios.post('https://helpful-tan-cricket.cyclic.app/reviews/new-review', payload)
        dispatch({type: REVIEW_POST_SUCCESS, payload : data.data})
        return data.data
    }catch(e){
        dispatch({type: REVIEW_POST_ERROR})
        return e.response.message
    }
}