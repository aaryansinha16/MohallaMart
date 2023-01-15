import { GET_ALL_ERROR, GET_ALL_LOADING, GET_ALL_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.type"

const initialState = {
    loading : false,
    error: false,
    payload: null
}

export const authReducer = (state = initialState, {type , payload}) => {
    switch(type){
        case SIGNUP_LOADING : {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case SIGNUP_ERROR : {
            return {
                ...state,
                loading: false,
                error: true,
                payload: payload
            }
        }
        case SIGNUP_SUCCESS : {
            return {
                ...state,
                payload: payload,
                loading : false,
                error: false
            }
        }
        case LOGIN_LOADING : {
            return {
                ...state,
                loading : true,
                error: false
            }
        }
        case LOGIN_ERROR : {
            return {
                ...state,
                loading: false,
                error: true,
                payload : payload
            }
        }
        case LOGIN_SUCCESS : {
            return {
                ...state,
                loading: false,
                error: false,
                payload: payload
            }
        }
        case GET_ALL_LOADING : {
            return {
                ...state,
                loading : true,
                error: false
            }
        }
        case GET_ALL_ERROR : {
            return {
                ...state,
                loading : false,
                error: true
            }
        }
        case GET_ALL_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                payload: payload
            }
        }
        case LOGOUT_SUCCESS : {
            return {
                ...state,
                loading : false,
                error: false,
                payload : null
            }
        }
        default : {
            return state
        }
    }
}