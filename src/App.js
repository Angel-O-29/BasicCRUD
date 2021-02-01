import React from 'react' 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer'
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';
import LoginContainer from './containers/LoginContainer';


const renderHome = () => (<HomeContainer/>)
const renderLogin = () => (<LoginContainer/>)
const renderCustomers = () => (<CustomersContainer/> )
const renderCustomerData = (props) => (<CustomerContainer {...props} dni={props.match.params.dni}/>)// el ...props
//es para usar los otros valores como history match entre otros 
const renderCustomerEdit = () => (<NewCustomerContainer/>)

function App() {
  return (
    <Router>

      <div className="App">
        <div className="appCont">
        <Route exact path="/" render={renderHome} />
        <Route exact path="/login" render={renderLogin} />
        <Route exact path="/signup" render={renderLogin} />

          <Route exact path="/customers" render={renderCustomers} />
          <Switch>
            <Route path="/customers/new" render={renderCustomerEdit} />
            <Route path="/customer/:dni"  render={renderCustomerData} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
