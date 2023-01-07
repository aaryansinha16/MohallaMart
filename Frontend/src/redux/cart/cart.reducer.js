import { CART_DELETE_ERROR, CART_DELETE_LOADING, CART_DELETE_SUCCESS, CART_GET_ERROR, CART_GET_LOADING, CART_GET_SUCCESS, CART_POST_ERROR, CART_POST_LOADING, CART_POST_SUCCESS } from "./cart.types"

let initialState = {
    loading : false,
    error : false,
    payload : null
}

export const cartReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case CART_GET_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }
        case CART_GET_ERROR : {
            return {
                ...state,
                loading : false,
                error :true
            }
        }
        case CART_GET_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                payload: payload
            }
        }
        case CART_POST_ERROR : {
            return {
                ...state,
                loading : false,
                error :true
            }
        }
        case CART_POST_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }
        case CART_POST_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                payload: payload
            }
        }
        case CART_DELETE_ERROR : {
            return {
                ...state,
                loading : false,
                error :true
            }
        }
        case CART_DELETE_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }
        case CART_DELETE_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                payload: payload
            }
        }
        default : {
            return state
        }
    }
}