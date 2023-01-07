import { WISHLIST_ERROR, WISHLIST_LOADING, WISHLIST_SUCCESS } from "./wishlist.types"

let initialState = {
    loading : false,
    error : false,
    payload : null
}

export const wishlistReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case WISHLIST_ERROR : {
            return {
                ...state,
                error: true,
                loading : false,
                payload : payload
            }
        }
        case WISHLIST_LOADING : {
            return {
                ...state,
                error : false,
                loading : true
            }
        }
        case WISHLIST_SUCCESS : {
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