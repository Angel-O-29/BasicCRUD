import { createAction } from 'redux-actions';
import { apiPut } from '../api';
import {urlCustomers} from './../api/urls';
import { EDIT_CUSTOMER } from './../constants'

export const updateCustomer = createAction(EDIT_CUSTOMER,(customer, id, userId) => apiPut(urlCustomers + userId,id,customer)());

