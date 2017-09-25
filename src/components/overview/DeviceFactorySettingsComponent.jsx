import React from 'react';


class DeviceFactorySettingsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <div className="bs-callout bs-callout-primary">
                    <h4>Version Infomation</h4>
                    <div className="row">
                        <div className="col-xs-6 col-sm-3" >
                        </div>
                        <div className="col-xs-6 col-sm-3" >
                        </div>
                        <div className="col-xs-6 col-sm-3" >
                        </div>
                        <div className="col-xs-6 col-sm-3" >
                        </div>
                    </div>
                </div>

                <div className="bs-callout bs-callout-primary">
                    <h4>Check Enables</h4>
                    <p>图标类只能应用在不包含任何文本内容或子元素的元素上。</p>
                </div>

                <div className="bs-callout bs-callout-primary">
                    <h4>Settings Infomation</h4>

                    <div className="js-wizard-simple block">
                        <ul className="nav nav-tabs nav-justified">
                            <li className="active">
                                <a href="#simple-classic-step1" data-toggle="tab" aria-expanded="true">1. Personal</a>
                            </li>
                            <li className="">
                                <a href="#simple-classic-step2" data-toggle="tab" aria-expanded="false">2. Details</a>
                            </li>
                        </ul>
                        <div className="block-content tab-content">
                            <div className="tab-pane push-30-t push-50 active" id="simple-classic-step1">
                                <div className="form-group">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <label for="simple-classic-firstname">First Name</label>
                                        <input className="form-control" type="text" id="simple-classic-firstname" name="simple-classic-firstname" placeholder="Please enter your firstname" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <label for="simple-classic-lastname">Last Name</label>
                                        <input className="form-control" type="text" id="simple-classic-lastname" name="simple-classic-lastname" placeholder="Please enter your lastname" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <label for="simple-classic-email">Email</label>
                                        <input className="form-control" type="email" id="simple-classic-email" name="simple-classic-email" placeholder="Please enter your email" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane push-30-t push-50" id="simple-classic-step2">
                                <div className="form-group">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <label for="simple-classic-details">Details</label>
                                        <textarea className="form-control" id="simple-classic-details" name="simple-classic-details" rows="9" placeholder="Share something about yourself"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        )
    }

}

module.exports = DeviceFactorySettingsComponent;