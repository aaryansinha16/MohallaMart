import axios from "axios"
import { ORDER_GET_ERROR, ORDER_GET_LOADING, ORDER_GET_SUCCESS, ORDER_POST_ERROR, ORDER_POST_LOADING, ORDER_POST_SUCCESS } from "./order.types"

//? GET all the orders for a particular user 
export const getOrderAction = (userId) => async(dispatch) => {
    dispatch({type: ORDER_GET_LOADING})
    try{
        let data = await axios.get(`https://helpful-tan-cricket.cyclic.app/orders?userId=${userId}`)
        dispatch({type: ORDER_GET_SUCCESS, payload : data.data})
        return data.data
    }catch(e){
        dispatch({type: ORDER_GET_ERROR, payload: e.response.message})
        return e.response.message
    }
}

//? POST order action for any particular user 
// * It takes userId, totalCost(total order cost) and products(array of objects consisting productId and quantity of that particular product)
export const postOrderAction = (userId, totalCost, products) => async(dispatch) => {
    dispatch({type: ORDER_POST_LOADING})
    try{
        let data = await axios.post('https://helpful-tan-cricket.cyclic.app/orders/new-order', {userId, totalCost, products})
        dispatch({type: ORDER_POST_SUCCESS, payload: data.data})
        return data.data
    }catch(e){
        dispatch({type: ORDER_POST_ERROR, payload: e.response.message})
        return e.response.message
    }
}


//! GET ALL ORDERS ACTION FOR ADMIN ONLY
export const getAllOrdersAction = (userId) => async(dispatch) => {
    dispatch({type: ORDER_GET_LOADING})
    try{
        let data = await axios.get(`https://helpful-tan-cricket.cyclic.app/orders/all-orders?userId=${userId}`)
        dispatch({type: ORDER_GET_SUCCESS, payload: data.data})
        return data.data
    }catch(e){
        dispatch({type:ORDER_GET_ERROR, payload: e.response.message})
        return e.response.message
    }
}