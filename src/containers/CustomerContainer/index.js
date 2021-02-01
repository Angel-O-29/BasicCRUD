import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import { getCustomerByDni } from '../../selector/customers';
import CustomerEdit from './../../components/CustomerEdit'
import CustomerData from './../../components/CustomerData'
import {fetchCustomers} from './../../actions/fetchCustomers';
import {updateCustomer} from './../../actions/updateCustomer';
import {deleteCustomer} from './../../actions/deleteCustomer';
import { SubmissionError } from 'redux-form';
import { getuserId } from './../../selector/users'


class CustomerContainer extends Component {

    componentDidMount() {
        if(Object.entries(this.props.customer).length === 0 && this.props.userId) {
            this.props.fetchCustomers(this.props.userId);
        }   
    }
    
    handleSubmit = (values) => {
        const { id } = values;
        const user = {
            name: values.name,
            dni: values.dni,
            id : values.id,
            age : values.age
        }
        return this.props.updateCustomer(user, id, this.props.userId).then(r => {
            if(r.error) {
                throw new SubmissionError(r.payload)
            }
        });
    }

    
    handleGoBack = () => {
        this.props.history.goBack();
    }

    handleDelete = (id) => {
        this.props.deleteCustomer(id, this.props.userId).then(v => {
            this.props.history.goBack();
        })
    }

    renderCustomerControl= (isEdit, isDelete) => {
        if(this.props.customer ) {
            const CustomerControl = (isEdit) ? CustomerEdit : CustomerData;
            return<CustomerControl {...this.props.customer}
            allowDelete={!!isDelete}
            onSubmitSuccess={this.handleGoBack}
            goback={this.handleGoBack}
            onSubmit={this.handleSubmit}
            onDelete={this.handleDelete}
            /> 
        }
        return null
    }

    renderBody = () => (
        <Route path="/customer/:dni/edit" children={
            ( { match: isEdit } ) => (
                <Route path="/customer/:dni/del" children={
                    ({match: isDelete}) => (this.renderCustomerControl(isEdit, isDelete))
                } />
            )
                //otra forma de mandar los valores iniciales es establecerlos 
                //con initialValues=
        } />
    )
    render() {
        
        return (
            <div>
                <AppFrame headerName='Cliente' body={this.renderBody()} />
            </div>
        );
    }
}

CustomerContainer.defaultProps = {
    customer: {}
}

CustomerContainer.propTypes = {
    customer : PropTypes.object,
    dni: PropTypes.string,
};

const mapDispatchToProps = {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
};

const mapStateToProps = (state, props ) => ({
    customer : getCustomerByDni(state,props.dni),
    userId : getuserId(state)
   
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));