import { ORDER_GET_ERROR, ORDER_GET_LOADING, ORDER_GET_SUCCESS, ORDER_POST_ERROR, ORDER_POST_LOADING, ORDER_POST_SUCCESS } from "./order.types"

let initialState = {
    loading : false,
    error: false,
    payload : null
}
export const orderReducer = (state = initialState , {type, payload}) => {
    switch(type){
        case ORDER_GET_ERROR : {
            return {
                ...state,
                loading : false,
                error : true
            }
        }
        case ORDER_GET_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }
        case ORDER_GET_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                payload : payload
            }
        }
        case ORDER_POST_ERROR : {
            return {
                ...state,
                loading : false,
                error : true
            }
        }
        case ORDER_POST_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }
        case ORDER_POST_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                payload : payload
            }
        }
        default : {
            return state
        }
    }
}