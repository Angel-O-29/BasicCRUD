import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form'
import { tolowercase,toCapitalize,} from '../../helpers/functions';
import CustomerActions from '../../components/CustomerActions';
//import PropTypes from 'prop-types';

const minLength = (value) => (
    (value && value.length < 6) && '*La longitud debe ser de min 6 caracteres'
)
const isEmail = (value) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!(emailRegex.test(value))){
        return '*El correo no es valido'
       } 
}

class LoginForm extends Component {
    myField = ({input, meta, type, label, name, withFocus} ) => (
        <div>
            <label className='block' htmlFor={name}>{label}:</label>
            <input {...input} 
            type={!type ?'text' : type}/>
            {
                meta.touched && meta.error &&<span>{meta.error}</span>
            }
        </div>
    )


    render() {
        const { handleSubmit, submitting, pristine,/*submitSucceeded,*/ goback} = this.props
        return (
            <div>
                <form className='formulario' onSubmit={handleSubmit}>
                <Field 
                        name='email'
                        label='Correo'
                        parse= {tolowercase}
                        format={toCapitalize}
                        component={this.myField}
                        validate={isEmail}>
                        
                    </Field>
                    <Field 
                        name='password' 
                        label='Contraseña'
                        type='password'
                        component={this.myField} 
                        parse={tolowercase}
                        validate={[ minLength]}>
                    </Field>
                    <CustomerActions >
                        <button type='submit' disabled={pristine || submitting}>Ingresar</button>
                        <button type='button' disabled={submitting} onClick={goback}>Crear Usuario</button>
                    </CustomerActions>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {

};
const validate = (values) => {
    const error = {};

    if(!values.email) {
        error.email = '*El Campo Correo es Requerido'
    }
    if(!values.age) {
        error.age = '*El Campo Edad es Requerido'
    }
    return error;
}
export default reduxForm({form:'login', validate})(LoginForm);