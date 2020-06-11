import React from 'react';
import { ForgotPassword } from 'aws-amplify-react'

export class CustomSignIn extends SignIn {
    constructor(props) {
        super(props);
        this._validAuthStates = ['signIn', 'signedOut', 'signedUp'];
        
    }
}