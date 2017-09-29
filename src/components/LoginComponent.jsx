import React from 'react';

import Constants from '../constants/Constants.jsx';
import StateManager from '../states/StateManager.jsx';

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    clickLoginButton() {
        StateManager.appState.resetModuleRoot();
        StateManager.appState.setUIName(Constants.Values.Module_UI_Main);
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
                                        <div className="form-material form-material-success">
                                            <input className="form-control" type="password" id="register-password" name="register-password" placeholder="Choose a strong password.." />
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