import React from 'react';

import StateManager from '../../states/StateManager.jsx';
import OverviewService from '../../services/OverviewService.jsx';

class RealtimeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.doLoopRequest = this.doLoopRequest.bind(this);
    }

    doLoopRequest() {
        this.refreshStatusInterval = setTimeout(function () {
            OverviewService.requestServer(1, 'A0', function (_json) {
                StateManager.dataState.setDashboardRTJson(_json);
                this.doLoopRequest();
            }.bind(this));
        }.bind(this), 100000);
    }

    componentWillMount() {
        this.doLoopRequest();
    }

    render() {
        return (
            <div />
        );
    }

}

module.exports = RealtimeComponent;