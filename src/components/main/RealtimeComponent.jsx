import React from 'react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';
import OverviewService from '../../services/OverviewService.jsx';

class RealtimeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.doLoopRequest = this.doLoopRequest.bind(this);
    }

    doLoopRequest() {
        this.refreshStatusInterval = setTimeout(function () {
            let rtType = 0;
            if (StateManager.appState.activeMainModule == Constants.Values.Main_Module_Overview) {
                if (StateManager.appState.activeModuleLevel1Name == Constants.Values.Overview_Level1_Detail) {
                    if (StateManager.appState.activeModuleLevel2Name == undefined) {
                        rtType = 2;
                    }
                } else {
                    rtType = 1;
                }
            }
            OverviewService.requestServer(rtType, StateManager.dataState.device, function (_json) {
                if (rtType == 1) {
                    if (_json.dashboard) {
                        StateManager.dataState.setDashboardRTJson(_json.dashboard);
                    }
                } else if (rtType == 2) {
                    if (_json.device) {
                        StateManager.dataState.setDetailJson(_json.device);
                    }
                } else {

                }
                this.doLoopRequest();
            }.bind(this));
        }.bind(this), 1000 * 3);
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