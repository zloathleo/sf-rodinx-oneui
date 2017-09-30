import React from 'react';
import md5 from 'blueimp-md5';

import Constants from '../constants/Constants.jsx';
import StateManager from '../states/StateManager.jsx';
import UserService from '../services/UserService.jsx';

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.clickLoginButton = this.clickLoginButton.bind(this);
    }

    clickLoginButton() {
        let _password = md5(this.inputPassword.value).toUpperCase();
        UserService.requestLogin('admin', _password, function (json) {
            StateManager.dataState.userType = 1;
            StateManager.appState.resetModuleRoot();  
        });
    }

    render() {
        return (
            <div className="content overflow-hidden">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                        <div className="block block-themed">
                            <div className="block-header bg-primary">
                                <h3 className="block-title">Login</h3>
                            </div>
                            <div className="block-content block-content-full block-content-narrow">
                                <h1 className="h2 font-w600 push-50-t push-5">RodinX</h1>
                                <p>Please enter the password.</p>

                                <div className="row push-50-t">
                                    <div className="col-xs-12">
                                        <div className="form-material form-material-primary">
                                            <input ref={(_ref) => this.inputPassword = _ref} className="form-control" type="password" placeholder="Enter the admin password.." />
                                            <label for="register-password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 push-10-t">
                                        <button className="btn btn-block btn-primary" onClick={this.clickLoginButton}>Login</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


module.exports = LoginComponent; 