import React from 'react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import BreadcrumbComponent from './BreadcrumbComponent.jsx';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="block-header bg-gray-lighter overview-head-padding">
                <ul className="nav-header pull-right push-10-r">
                    <li>
                        <button className="btn btn-square btn-primary" data-toggle="modal" data-target="#modal-fromleft" style={{ margin: '0 2px' }}>
                            <i className="glyphicon glyphicon-cog"></i> 123
                    </button>
                    </li>
                </ul>
                <ul className="nav-header pull-left">
                    <li>
                        <button className="btn btn-square btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                            <i className="fa fa-navicon"></i>
                        </button>
                    </li>
                    <li>
                        <BreadcrumbComponent />
                    </li>
                </ul>

            </div>
        )
    }

}

module.exports = HeaderComponent;