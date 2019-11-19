import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import CaseList from './components/caseList';
import CaseForm from './components/caseForm';


function App(props) {

  const { isAuthenticated, isVerifying } = props;

  return (
    <div>
      <CaseForm/>
      <CaseList/>      
    </div>
    // <Switch>
    //   <div className="App">
    //     <ProtectedRoute 
    //       exact
    //       path='/'
    //       component={Home}
    //       isAuthenticated={isAuthenticated}
    //       isVerifying={isVerifying}
    //     />
    //     <Route path='/login' component={Login} />
    //   <Signup />
    //   </div>
    // </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps)(App);
