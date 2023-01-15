import axios from "axios"
import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./product.types"

export const getProductsAction = () => async(dispatch) => {
    dispatch({type: PRODUCT_LOADING})
    try{
        let data = await axios('https://helpful-tan-cricket.cyclic.app/products')
        dispatch({type: PRODUCT_SUCCESS, payload: data.data})
        return data.data
    }catch(e){
        dispatch({type: PRODUCT_ERROR, payload: e.response.message})
        return e.response.message
    }
}

export const getSingleProduct = (prodId) => async (dispatch) => {
    dispatch({type: PRODUCT_LOADING})
    try{
        let data = await axios.get(`https://helpful-tan-cricket.cyclic.app/products/single-product?q=${prodId}`)
        // console.log(data.data, 'REDUX SINGLE', prodId)
        dispatch({type: PRODUCT_SUCCESS, payload: data.data})
        return data.data
    }
    catch(e){
        dispatch({type: PRODUCT_ERROR, payload: e.response.message})
    }
}