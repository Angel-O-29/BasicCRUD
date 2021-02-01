import {createAction } from 'redux-actions'
import {SIGNUP_USER } from './../constants'
import {apiPost} from './../api';
import {urlIngresarUser} from './../api/urls'

export const signUpUser = createAction(SIGNUP_USER, (obj) => apiPost(urlIngresarUser, obj)())