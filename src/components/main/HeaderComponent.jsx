import React from 'react';
import md5 from 'blueimp-md5';

import Constants from '../../constants/Constants.jsx';
import EventProxy from '../../utils/EventProxy.jsx';
import AppState from '../../states/AppState.jsx';

import HeaderBreadcrumbComponent from './HeaderBreadcrumbComponent.jsx';
import HeaderRightToolbarComponent from './HeaderRightToolbarComponent.jsx';

import LoginModalContent from '../modal/LoginModalContent.jsx';

import UserService from '../../services/UserService.jsx';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { updateCount: 0 };
        this.onClickConfig = this.onClickConfig.bind(this);
        this.onClickLogout = this.onClickLogout.bind(this);
    }

    onClickOverview() {
        EventProxy.trigger(Constants.Event.MainUI_Key, {
            uiName: Constants.Event.MainUI_Value_Overview
        });
    }

    onClickAlarm() {
        EventProxy.trigger(Constants.Event.MainUI_Key, {
            uiName: Constants.Event.MainUI_Value_Alarm
        });
    }

    onClickLogout() {
        AppState.User_Name = 'guest';
        this.setState({ updateCount: this.state.updateCount++ });
    }

    //登录
    onClickConfig() {
        let _modalContent = <LoginModalContent ref={(_ref) => this.loginModalContent = _ref} />;

        let _okFunc = function () {
            let _password = md5(this.loginModalContent.inputPassword.value).toUpperCase();
            UserService.requestLogin(_password, function (json) {
                AppState.User_Name = 'admin';
                toastr.success('Login Success.');
                this.setState({ updateCount: this.state.updateCount++ });
                EventProxy.trigger(Constants.Event.MainUI_Key, {
                    uiName: Constants.Event.MainUI_Value_Overview
                });
            }.bind(this));

            //todo
        }.bind(this);

        let _dispatch = {
            uiName: 'Configuration',
            data: { title: 'Configuration' },
            exParams: {
                content: _modalContent,
                okFunc: _okFunc
            }
        }
        EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
    }

    render() {
        let _loginContent = null;
        if (AppState.User_Name == 'admin') {
            _loginContent = (<li>
                <a tabindex="-1" href="#" onClick={this.onClickLogout}>
                    <i className="si si-login pull-right"></i>Back to View</a>
            </li>)
        } else {
            _loginContent = (<li>
                <a tabindex="-1" href="#" onClick={this.onClickConfig} data-toggle="modal" data-target="#modal-fromleft">
                    <i className="si si-settings pull-right"></i>Configuration</a>
            </li>)
        }
        return (
            <div className="block-header bg-gray-lighter overview-head-padding">
                <HeaderRightToolbarComponent />
                <ul className="nav-header pull-left">
                    <li>
                        <div className="btn-group">
                            <button className="btn btn-square btn-default dropdown-toggle" data-toggle="dropdown" type="button">
                                <i className="fa fa-navicon"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-left">
                                <li>
                                    <a tabindex="-1" href="#" onClick={this.onClickOverview}>
                                        <i className="si si-fire pull-right"></i>
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="#" onClick={this.onClickAlarm}>
                                        <i className="si si-user pull-right"></i>
                                        Alarm</a>
                                </li>
                                <li className="divider"></li>
                                {_loginContent}
                            </ul>
                        </div>

                    </li>
                    <li>
                        <HeaderBreadcrumbComponent />
                    </li>
                </ul>

            </div>
        )
    }

}

module.exports = HeaderComponent;