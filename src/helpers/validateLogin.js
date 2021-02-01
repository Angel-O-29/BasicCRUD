import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import './validateLogin.css'

export const validateLogin = WrappedComponent => {
    const Validate = class extends React.Component {
        render() {
            const {localId } = this.props.user;
            const isAllow = !!localId
            if(!isAllow){
                return <div><p>No Se Encuentra Logeado, por favor ingrese a su cuenta</p><Link className='boton' to={`/login`} >Login</Link></div>
            }
            return <WrappedComponent {...this.props}/>
        }
    }
    return connect(state=>({user: state.users}))(Validate)
}