import React from 'react';

class LoginModalContent extends React.Component {

    constructor(props) {
        super(props); 
    }
  
    render() {
        return ( 
            <div className="block block-themed"> 
                <div className="block-content block-content-full block-content-narrow">
                    <h1 className="h2 font-w600 push-5">RodinX</h1>
                    <p>Please enter the password.</p>

                    <div className="row push-50-t">
                        <div className="col-xs-12">
                            <div className="form-material form-material-primary">
                                <input ref={(_ref) => this.inputPassword = _ref} className="form-control" type="password" placeholder="Enter the admin password.." />
                                <label for="register-password">Password</label>
                            </div>
                        </div> 
                    </div>

                </div>
            </div> 
        )
    }

}

module.exports = LoginModalContent;