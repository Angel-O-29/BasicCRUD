import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import AppFrame from '../../components/AppFrame'
import CustomerActions from '../../components/CustomerActions';
import CustomersList from '../../components/CustomersList';

import {fetchCustomers} from './../../actions/fetchCustomers';
import { getCustomers } from '../../selector/customers';
import { getuserId } from './../../selector/users';



class CustomersContainer extends Component {
    componentDidMount() {
        if(this.props.customers.length === 0 && this.props.userId) {
            this.props.fetchCustomers(this.props.userId)

        }
    }

    handelAddNew = () => {
        this.props.history.push('/customers/new')
    }
    renderBody= customers => (      <div>
        <CustomersList customers={customers} urlPath={'customer/'}></CustomersList>
        <CustomerActions>
            <button onClick={this.handelAddNew}>Nuevo Cliente</button>
        </CustomerActions>
 
        </div>)
    
    render() {
        //debugger;// eslint-disable-line no-debugger
        return (
            <div className='container'>
                <AppFrame headerName={'Listado de Clientes'} body={this.renderBody(this.props.customers)}></AppFrame>
            </div>
        )
    }
}


CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func,
    customers: PropTypes.array,
}
CustomersContainer.defaultProps = {
    customers: []
}
/*

*/
const mapDispatchToProps = { fetchCustomers }
const mapStateToProps = (state) => ({
    customers: getCustomers(state),
    userId : getuserId(state)
})
export default (withRouter(connect(mapStateToProps, mapDispatchToProps)( CustomersContainer)))
