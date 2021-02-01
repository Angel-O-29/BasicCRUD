import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import CustomerActions from '../CustomerActions';
import {validateLogin} from './../../helpers/validateLogin'

function CustomerData({id, name, age, dni, goback, allowDelete, onDelete}) {

    return (
        <div>
            <div className='customerDataCont'>
                <h2>{allowDelete ? 'Desea eliminar este Cliente?' : 'Datos del cliente'}</h2>
                <p><span>Nombre: </span>{name}</p>
                <p><span>Edad: </span>{age}</p>
                <p><span>C.I: </span>{dni}</p>
            </div>
            <CustomerActions >
                    <button onClick={goback}>Cancelar</button>
                    {allowDelete && <button onClick={()=> onDelete(id)}>Eliminar</button>}
            </CustomerActions>
            
        </div>
    )
}

CustomerData.propTypes = {
    id: PropTypes.number,
    nombre: PropTypes.string,
    edad:  PropTypes.number,
    ci: PropTypes.number,
    allowDelete: PropTypes.bool,
    onDelete: PropTypes.func,
    goback:PropTypes.func.isRequired,
}

export default validateLogin(CustomerData)

