import { handleActions } from 'redux-actions';
import { LOGIN_USER, SIGNUP_USER } from './../constants'
const initialState = {};

export const users = handleActions({
    [LOGIN_USER]: (state, action) =>{  
        if (Object.keys(action.payload).length === 0 ) {
            return {}
        }
        
        return( {...action.payload})},
    [SIGNUP_USER]: (state, action) =>{  
        if (Object.keys(action.payload).length === 0 ) {
            return {}
        }
        
        return( {...action.payload})},
} , initialState)