import React from 'react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    clickAdminLoginButton() {
        StateManager.appState.setUIName(Constants.Values.Module_UI_Login);
    }

    render() {
        return (
            <header id="header-navbar" className="content-mini content-mini-full">
                <ul className="nav-header pull-right">
                    <li>
                        <button className="btn btn-default" type="button" onClick={this.clickAdminLoginButton}>
                            <i className="fa fa-tasks"></i>
                        </button>
                    </li>
                </ul>

                <ul className="nav-header pull-left"> 
                    <li>
                        <button className="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                            <i className="fa fa-navicon"></i>
                        </button>
                    </li>
                </ul>
            </header>
        )
    }

}

module.exports = HeaderComponent;