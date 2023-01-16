import { REVIEW_GET_ERROR, REVIEW_GET_LOADING, REVIEW_GET_SUCCESS, REVIEW_POST_ERROR, REVIEW_POST_LOADING, REVIEW_POST_SUCCESS } from "./reviews.types"

let initialState = {
    loading : false,
    error : false,
    payload: []
}

export const reviewReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case REVIEW_GET_ERROR : {
            return {
                ...state,
                error: true,
                loading : false
            }
        }
        case REVIEW_GET_LOADING : {
            return {
                ...state,
                error : false,
                loading : true
            }
        }
        case REVIEW_GET_SUCCESS : {
            return {
                ...state,
                error: false,
                loading : false,
                payload: payload
            }
        }
        case REVIEW_POST_ERROR : {
            return {
                ...state,
                error: true,
                loading : false
            }
        }
        case REVIEW_POST_LOADING : {
            return {
                ...state,
                error : false,
                loading : true
            }
        }
        case REVIEW_POST_SUCCESS : {       
            return {
                ...state,
                error: false,
                loading : false,
                payload: payload
            }
        }
        default : {
            return state
        }
    }
}