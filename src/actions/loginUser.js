import { createAction } from 'redux-actions'
import { apiPost } from '../api';
import { urlObtenerUser } from './../api/urls'
import { LOGIN_USER } from './../constants'

export const loginUser =  createAction(LOGIN_USER, obj => apiPost(urlObtenerUser, obj)())