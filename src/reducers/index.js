import { combineReducers } from 'redux';
import { customers } from './customers';
import { users} from './users'
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    customers,
    users,
    form: reduxForm
})