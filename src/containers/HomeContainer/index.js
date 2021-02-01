import React, { Component } from 'react'
import AppFrame from './../../components/AppFrame';
import CustomerActions from '../../components/CustomerActions'
import {withRouter} from 'react-router-dom'

class HomeContainer extends Component {

    handlesignUp = () => {
        this.props.history.push('/signup')
    }
    handlelogin = () => {
        this.props.history.push('/login')
    }


    render() {
        return (
            <div>
                <AppFrame headerName='CRUD de usuarios'
                body={
                    <div> 
                        <h2>Ingrese en su cuenta y comienze a agregar usuarios </h2>
                        <CustomerActions>
                            <button onClick={this.handlelogin}>Login</button>
                            <button onClick={this.handlesignUp}>Crear Cuenta</button>
                        </CustomerActions>
                    </div>
                }/>
            </div>
        )
    }
}

export default withRouter(HomeContainer);
