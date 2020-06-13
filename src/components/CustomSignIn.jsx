import React from 'react';
import { SignIn } from 'aws-amplify-react';
import { TextField, Card, CardContent, Typography } from '@material-ui/core';

export class CustomSignIn extends SignIn {
    constructor(props) {
        super(props);
        this._validAuthStates = ['signIn', 'signedOut', 'signedUp'];
    }

    showComponent(theme) {
        return (
          <div style={{ padding: '10%', paddingTop: '30%' }}>
            <Card style={{ width: '40%', margin: 'auto' }}>
              <CardContent style={{ paddingBottom: '0% '}}>
                <Typography variant='h5'>Log In</Typography>
              </CardContent>
              <CardContent>
                  <TextField 
                    id="username"
                    label='Username'
                    defaultValue='username'
                    onChange={this.handleInputChange}
                    key='username'
                    variant='outlined'
                    style={{ margin: '2%', width: '96%' }}
                  />
                  <TextField 
                    id="password"
                    label='Password'
                    defaultValue='******************'
                    onChange={this.handleInputChange}
                    key='password'
                    type='password'
                    variant='outlined'
                    style={{ margin: '2%', width: '96%' }}
                  />
              <div className="mb-6" style={{ margin: '2%' }}>
                <p className="text-grey-dark text-xs">
                  Forgot your password?{" "}
                  <a
                    className="text-indigo cursor-pointer hover:text-indigo-darker"
                    onClick={() => super.changeState("forgotPassword")}
                  >
                    Reset Password
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-between" style={{ margin: '2%' }}>
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => super.signIn()}
                >
                  Login
                </button>
                <p className="text-grey-dark text-xs">
                  No Account?{" "}
                  <a
                    className="text-indigo cursor-pointer hover:text-indigo-darker"
                    onClick={() => super.changeState("signUp")}
                  >
                    Create account
                  </a>
                </p>
              </div>
              </CardContent>
              </Card>
          </div>
        );
      }
    }