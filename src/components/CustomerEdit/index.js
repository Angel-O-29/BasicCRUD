import React from 'react'
import PropTypes from 'prop-types';
import { reduxForm, Field} from 'redux-form'
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';
import CustomerActions from '../CustomerActions';
import { toNumber, tolowercase,toCapitalize,onlyGrow} from '../../helpers/functions';
import { Prompt } from 'react-router-dom';
import './styles.css'
import {validateLogin} from './../../helpers/validateLogin'

const isRequired = (value) => (
    !value ? '*Este campo es requerido' : undefined
)
const isNumber = (value) => (
    isNaN(Number(value)) && '*Este campo debe ser Numerico'
)


/*
  function capitalizeSentence(string) {
      var finalString = ''
    if(string.includes(' ')) {
        const words = string.split(' ')
        words.forEach( w =>{
            finalString = finalString + capitalizeFirstLetter(w) +' '
        })
    } else {
        finalString = capitalizeFirstLetter(string)
    }
    return finalString
  }

*/

class CustomerEdit extends React.Component {
    componentDidMount() {
        if(this.control) {
            this.control.focus()
        }
    }

    myField = ({input, meta, type, label, name, withFocus} ) => (
        <div>
            <label className='block' htmlFor={name}>{label}:</label>
            <input {...input} 
            ref={withFocus && (txt => this.control = txt)}
            type={!type ?'text' : type}/>
            {
                meta.touched && meta.error &&<span>{meta.error}</span>
            }
        </div>
    )

    render() {
        const { handleSubmit, submitting, pristine,submitSucceeded, goback} = this.props
        return (
            <div className='formulario'>
                <h2>Customer Edit</h2>
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus
                        name='name'
                        label='Nombre'
                        parse= {tolowercase}
                        format={toCapitalize}
                        component={this.myField}>
                    </Field>
                    <Field 
                        name='dni' 
                        label='DNI'
                        component={this.myField} 
                        parse={toNumber}
                        validate={[isRequired, isNumber]}>
                    </Field>
                    <Field 
                        name='age' 
                        label='Edad'
                        type='number'
                        component={this.myField} 
                        parse={toNumber}
                        normalize={onlyGrow}
                    ></Field>
                    <CustomerActions >
                        <button type='submit' disabled={pristine || submitting}>Aceptar</button>
                        <button type='button' disabled={submitting} onClick={goback}>Cancelar</button>
                    </CustomerActions>
                    <Prompt when={!pristine && !submitSucceeded} message="Se perdera los datos si continua"></Prompt>
                </form> 
            </div>
        )
    }
}

CustomerEdit.propTypes = {
    initialValues: PropTypes.object,
}
const validate = (values) => {
    const error = {};

    if(!values.name) {
        error.name = '*El Campo Nombre es Requerido'
    }
    if(!values.age) {
        error.age = '*El Campo Edad es Requerido'
    }
    return error;
}
const CustomerEditForm = reduxForm( {form: 'customerEdit', validate})(CustomerEdit);


export default validateLogin(setPropsAsInitial(CustomerEditForm))

