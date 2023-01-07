import axios from "axios"
import { CART_DELETE_ERROR, CART_DELETE_LOADING, CART_DELETE_SUCCESS, CART_GET_ERROR, CART_GET_LOADING, CART_GET_SUCCESS, CART_POST_ERROR, CART_POST_LOADING, CART_POST_SUCCESS } from "./cart.types"

export const postCartAction = (userId, productId) => async(dispatch) => {
    dispatch({type: CART_POST_LOADING})
    try{
        let data = await axios.post(`http://localhost:3000/cart/new-item`, {userId, productId})
        dispatch({type: CART_POST_SUCCESS, payload: data.data})
        return data.data
    }catch(e){
        dispatch({type: CART_POST_ERROR, payload: e.response.message})
        return e.response.message
    }
} 

export const getCartAction = (userId) => async (dispatch) => {
    dispatch({type: CART_GET_LOADING})
    try{
        let data = await axios.get(`http://localhost:3000/cart?userId=${userId}`)
        dispatch({type: CART_GET_SUCCESS, payload: data.data})
        return data.data
    }catch(e){
        dispatch({type: CART_GET_ERROR, payload : e.response.message})
        return e.response.message
    }
}

export const deleteCartAction = (userId, productId) => async(dispatch) => {
    dispatch({type: CART_DELETE_LOADING})
    try{
        let data = await axios.delete('http://localhost:3000/cart/remove-cart', {
            headers : {
                userId : userId,
                productId : productId
            }
        })
        dispatch({type: CART_DELETE_SUCCESS, payload: data.data})
        return data.data
    }catch(e){
        dispatch({type: CART_DELETE_ERROR, payload : e.response.message})
        return e.response.message
    }
}

export const cartQtyAction = (userId, productId, quantity) => async (dispatch) => {
    dispatch({type: CART_POST_LOADING})
    try{
        // let data = await axios.patch()
    }catch(e){
        dispatch({type: CART_POST_ERROR, payload: e.response.message})
        return e.response.message
    }
} 