import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form'
import { tolowercase,toCapitalize,} from '../../helpers/functions';
import CustomerActions from '../../components/CustomerActions';
//import PropTypes from 'prop-types';

const minLength = (value) => (
    (value && value.length < 6) && '*La longitud debe ser de min 6 caracteres'
)

class SignUpForm extends Component {
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
                        component={this.myField}>
                    </Field>
                    <Field 
                        name='password' 
                        label='Contraseña'
                        type='password'
                        component={this.myField} 
                        parse={tolowercase}
                        validate={[ minLength]}>
                    </Field>
                    <Field 
                        name='repassword' 
                        label='Repita Contraseña'
                        type='password'
                        component={this.myField} 
                        parse={tolowercase}
                        validate={[ minLength]}>
                    </Field>
                    <CustomerActions >
                        <button type='submit' disabled={pristine || submitting}>Crear Usuario</button>
                        <button type='button' disabled={submitting} onClick={goback}>Ingresar con cuenta existente </button>
                    </CustomerActions>
                </form>
            </div>
        );
    }
}

SignUpForm.propTypes = {

};
const validate = (values) => {
    const error = {};

    if(!values.email) {
        error.name = '*El Campo email es Requerido'
    }
    if(!values.password ) {
        error.password = '*El Campo contraseña es Requerido'
    }
    if(!values.repassword ) {
        error.repassword = '*Verifique su contraseña'
    } else if(values.password !== values.repassword) {
        error.password = '*las contraseñas no coinciden'
    }
    return error;
}
export default reduxForm({form:'login', validate})(SignUpForm);