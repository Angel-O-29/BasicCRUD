import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import SignUpForm from './../../components/signUpForm'
import {Route, withRouter} from 'react-router-dom'
import LoginForm from '../../components/LoginForm';
import { connect } from 'react-redux'
import { loginUser } from './../../actions/loginUser'
import { signUpUser } from './../../actions/signUpUser';
import { getuserId } from '../../selector/users';
//

class LoginContainer extends Component {

    handleLogin = (values) => {
        const user = {
            email : values.email,
            password : values.password,
            returnSecureToken : true
        }
        return this.props.loginUser(user)
    }
    handleSuccess = () => {
        if(this.props.userId) {
            this.props.history.replace('/customers')
        }
    }
    goRegister = () => this.props.history.replace('/signup');
    goLogin = () => this.props.history.push('/login');

    handleSignUp = (values) => {
        const user = {
            email : values.email,
            password : values.password,
            returnSecureToken : true
        }
        return this.props.signUpUser(user)
    }
    renderBody= () =>
        <Route path="/signup" children={
            ({match: isSignUp}) => (this.renderLoginControl(isSignUp))
        } />
    renderLoginControl = (isSignUp) => {
        if(isSignUp) {
            return <SignUpForm onSubmit={this.handleSignUp} goback={this.goLogin} onSubmitSuccess={this.handleSuccess}/>
        } else {
            return <LoginForm onSubmit={this.handleLogin} goback={this.goRegister} onSubmitSuccess={this.handleSuccess}/>
        }
    }

    render() {
        return (
            <div className='container'>
            <AppFrame headerName={'Listado de Clientes'} body={this.renderBody()}></AppFrame>
        </div>
        );
    }
}
/*
LoginContainer.propTypes = {

};
*/
const mapDispatchToProps = {
    loginUser,
    signUpUser
};

const mapStateToProps = (state, props ) => ({
    userId : getuserId(state)
   
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));