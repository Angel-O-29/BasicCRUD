import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import CustomerEdit from './../../components/CustomerEdit'
import {insertCustomer} from './../../actions/insertCustomer';
import { SubmissionError } from 'redux-form';
import { getuserId } from './../../selector/users'
import {fetchCustomers} from './../../actions/fetchCustomers';



class NewCustomerContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: '',
            dni :'',
            name : '',
            age : 0
        }
    }

    handleSubmit = (values) => {
        console.log(JSON.stringify(values))
        this.setState({
            dni :values.dni,
            name : values.name,
            age :values.age
        })
        
        return this.props.insertCustomer(values, this.props.userId).then( r => {
            if(r.error) {
                throw new SubmissionError(r.payload)
            }
        })
    }

    handleSubmitSuccess = async () => {
        await this.props.fetchCustomers(this.props.userId)
        this.handleGoBack()
    }
    
    handleGoBack = () => {
        
        this.props.history.goBack();
    }

    renderBody = () => {
        const newCustomer = {
            'id': '',
            'dni' :'',
            'name' : '',
            'age' : 0
        }
        return (
        <CustomerEdit {...newCustomer} onSubmitSuccess={this.handleSubmitSuccess} goback={this.handleGoBack} onSubmit={this.handleSubmit}/>
    )}
    render() {
        
        return (
            <div>
                <AppFrame headerName='Nuevo Cliente' body={this.renderBody()} />
            </div>
        );
    }
}

NewCustomerContainer.defaultProps = {
    customer: {}
}

NewCustomerContainer.propTypes = {
    customer : PropTypes.object,
    dni: PropTypes.string,
};

const mapDispatchToProps = {
    insertCustomer,
    fetchCustomers
    
};
const mapStateToProps = (state) => ({
    userId : getuserId(state)
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCustomerContainer));