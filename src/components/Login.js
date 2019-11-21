import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions/index.js";
import { useState } from 'react';


function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    const handleSubmit = () => {
        const { dispatch } = props;

        dispatch(loginUser(email, password));
    };

    const { loginError, isAuthenticated } = props;

    if (isAuthenticated) {
        return <Redirect to="/" />;
    } else {
        return (
            <div>
                <div>
                    <h3>Sign in</h3>
                    <input
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={handleEmailChange}
                    />
                    <input
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handlePasswordChange}
                    />
                    {loginError && (<p>Incorrect email or password.</p>)}
                    <button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(Login);