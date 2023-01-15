import axios from "axios"
import { GET_ALL_ERROR, GET_ALL_LOADING, GET_ALL_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.type"

export const signupAction = (creds) => async (dispatch) => {
    dispatch({type: SIGNUP_LOADING})
    try{
        let data = await axios.post('http://localhost:3000/user/signup', creds)
        dispatch({type: SIGNUP_SUCCESS, payload : data.data})
        localStorage.setItem("userData", JSON.stringify(data.data.data))
        return data.data
    }catch(e){
        console.log('ERROR TEST') 
        dispatch({type: SIGNUP_ERROR, payload: e.response.data})
        return  e.response.data
    }
}

export const loginAction = (creds) => async(dispatch) => {
    dispatch({type: LOGIN_LOADING})
    try{
        let data = await axios.post('http://localhost:3000/user/login', creds)
        dispatch({type: LOGIN_SUCCESS, payload: data.data})
        localStorage.setItem("userData", JSON.stringify(data.data.data))
        return data.data
    }catch(e){
        dispatch({type: LOGIN_ERROR, payload: e.response.data})
        return e.response.data
    }
}

export const getAllUsersAction = (userId) => async(dispatch) => {
    dispatch({type: GET_ALL_LOADING})
    try{
        let data = await axios.get(`http://localhost:3000/user?q=${userId}`)
        dispatch({type: GET_ALL_SUCCESS, payload : data.data})
        return data.data
    }catch(e){
        dispatch({type: GET_ALL_ERROR})
    }
}

export const logoutAction = () => async(dispatch) => {
    // dispatch({type: LOGI})
    localStorage.removeItem("userData")
    dispatch({type: LOGOUT_SUCCESS})
    return "Logged out successfully"
}