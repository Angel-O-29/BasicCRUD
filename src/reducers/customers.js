import { handleActions } from 'redux-actions';
import { DELETE_CUSTOMER, EDIT_CUSTOMER, FETCH_CUSTOMERS/*, INSERT_CUSTOMER */} from '../constants';
const initialState = []
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => {
        const array = []
        if(action.payload){
            Object.entries(action.payload).forEach(([key, value]) => {
                array.push({...value, 'id' : key})
            }
            )
            return (!action.error ? [...array] : [])
        } else {
            return []
        }
    },
    /*[INSERT_CUSTOMER]: (state, action) => {
        return [...state,action.payload]},*/
    [EDIT_CUSTOMER] :  (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;
        const customers=state;
        const newCustomers = customers.map((obj) => {
            if(obj.id === id) {
                return customerPayload;
            } else {
                return obj
            }
        })
        return newCustomers;
    },
    [DELETE_CUSTOMER] : (state, action) =>  state.filter((obj) => (obj.id !== action.payload))
} , initialState)