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


// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//     apiKey: 'AIzaSyByte5nh7cajduAOegw-DmqRupfHQWnyfk',
//     authDomain: 'test-frbs-6650b.firebaseapp.com',
//     projectId: 'test-frbs-6650b'
// });

// var db = firebase.firestore();

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// Add a second document with a generated ID.
// db.collection("users").add({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });

// //get data
// let dataVariable = []
// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     dataVariable.push(doc.data())
//       console.log(dataVariable[0]);
//   });
// });


function App(props) {

  const { isAuthenticated, isVerifying } = props;

  return (
    <Switch>
      <div className="App">
        <ProtectedRoute 
          exact
          path='/'
          component={Home}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path='/login' component={Login} />
        {/* <CaseForm/>
        <CaseList/> */}
      <Signup />
      </div>
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps)(App);
