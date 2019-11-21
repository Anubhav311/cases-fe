import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import SkillsList from './components/Skills/skillsList';
import Parts from './components/Parts';
import CaseForm from './components/caseForm';

const AppDiv = styled.div`
  background: #D3D8DA;
  min-height: 100vh;
`

const Div = styled.div`
  width: 100%;
  height: 10vh;
  background: #472C6C;
`

function App(props) {

  const { isAuthenticated, isVerifying } = props;

  return (
    <AppDiv>
      <Div></Div>
      <Route exact path="/" component={Parts} />
      <Route path="/skills" component={SkillsList}/>
    </AppDiv>
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
