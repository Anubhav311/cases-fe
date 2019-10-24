import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signupUser } from "../actions/signup";
import { useState } from 'react';

function Signup(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signupError, isAccountCreated } = props;

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    const handleSubmit = () => {
        const { dispatch } = props;

        dispatch(signupUser(email, password));
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

function mapStateToProps(state) {
    return {
        isSigningUp: state.signup.isSigningUp,
        signupError: state.signup.signupError,
        isAccountCreated: state.signup.isAccountCreated,
        user: state.signup.user
    };
}

export default connect(mapStateToProps)(Signup);