import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signupUser } from "../actions";
import { useState, useEffect } from 'react';

function Signup(props={}) {
    const [credentials, setCredentials] = useState({email: "", password: ""})

    const { signupError, isAuthenticated } = props;

    const handleEmailChange = ({ target }) => {
        setCredentials({ email: target.value });
    };

    const handlePasswordChange = ({ target }) => {
        setCredentials({ password: target.value });
    };

    const handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;

        // dispatch(loginUser(email, password));
    };

    return (
            <div>
            <div>
                <h3>Sign Up</h3>
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
                {signupError && (<p>Incorrect email or password.</p>)}
                <button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Signup;